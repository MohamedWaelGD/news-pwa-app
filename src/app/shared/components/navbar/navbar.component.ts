import { Component, signal, effect, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { DarkLightModeService } from '../../../core/services/dark-light-modes/dark-light-mode.service';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  private _router = inject(Router);
  private _darkModeService = inject(DarkLightModeService);

  protected search = signal('');
  protected search$ = new Subject<string>();
  protected searchDebounced = this.search$.pipe(debounceTime(1000));
  protected isSideBarOpen = signal(false);

  constructor() {
    effect(() => {
      if (this.search()) {
        this.search$.next(this.search());
      }
    })
  }

  ngOnInit(): void {
    this.onSearch();
  }

  private onSearch() {
    this.searchDebounced.subscribe(value => {
      this._router.navigate(['/news/' + value]);
      this.search.set('');
    });
  }

  protected toggleDarkMode() {
    this._darkModeService.toggleDarkMode();
  }

  protected toggleSideBar() {
    console.log('Toggling sidebar');
    if (this.isSideBarOpen()) {
      gsap.to('.side-bar', {
        duration: 0.2,
        opacity: 0,
        zIndex: -1
      });
      gsap.to('.side-bar-content', {
        duration: 0.2,
        x: 1000
      });
    } else {
      gsap.to('.side-bar', {
        duration: 0.2,
        opacity: 1,
        zIndex: 1000
      });
      gsap.to('.side-bar-content', {
        duration: 0.2,
        x: 0
      });
    }
    this.isSideBarOpen.set(!this.isSideBarOpen());
  }
}
