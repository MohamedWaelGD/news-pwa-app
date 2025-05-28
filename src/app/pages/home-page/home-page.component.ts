import {
  AfterViewInit,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TrendingTopicsComponent } from './components/trending-topics/trending-topics.component';
import { News } from '../../core/models/news.model';
import { NewsService } from '../../core/services/news/news.service';
import { ExtraTopicsComponent } from "./components/extra-topics/extra-topics.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, TrendingTopicsComponent, ExtraTopicsComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  private _newsService = inject(NewsService);

  protected news = signal<News[]>([]);
  protected heroNews = computed(() => this.news().slice(0, 3));
  protected trendingNews = computed(() => this.news().slice(3, 7));
  protected extraNews = computed(() =>
    this.news().slice(7, this.news().length)
  );
  protected loading = signal<boolean>(false);

  ngOnInit(): void {
    this.getTopStories();
  }

  getTopStories() {
    this.loading.set(true);
    this._newsService.getAllNews().subscribe({
      next: (response) => {
        this.news.set(response.results);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error fetching news:', error);
        this.loading.set(false);
      },
    });
  }
}
