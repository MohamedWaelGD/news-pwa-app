import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { DarkLightModeService } from './core/services/dark-light-modes/dark-light-mode.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private _darkModeService = inject(DarkLightModeService);
  title = 'news-pwa-app';

  ngOnInit(): void {
    this._darkModeService.checkDarkMode();
  }

}
