import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { NewsService } from '../../core/services/news/news.service';
import { News } from '../../core/models/news.model';
import { ApiResponse } from '../../core/models/api-response.model';
import { LoadingSpinnerComponent } from "../../shared/components/loading-spinner/loading-spinner.component";
import { NewsBlockComponent } from "../../shared/components/news-block/news-block.component";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-news-page',
  imports: [LoadingSpinnerComponent, NewsBlockComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss',
})
export class NewsPageComponent implements OnInit {
  private _newsService = inject(NewsService);
  private _activatedRoute = inject(ActivatedRoute);

  protected response = signal<ApiResponse<News[]> | null>(null);
  protected news = signal<News[]>([]);
  protected loading = signal(false);
  protected searchedCategory = signal('');
  protected searchedQuery = signal('');

  constructor() {
    effect(() => {
      if (this.response()) {
        setTimeout(() => {
          this.news.set([...this.news(), ...this.response()!.results]);
        })
      }
    })
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.setupFilterSearch(params);
    })
    this.loadNews();
  }

  private setupFilterSearch(params: Params) {
    const isSearchWithCategory = this._activatedRoute.snapshot.data['searchWithCategory'];
    if (isSearchWithCategory) {
      this.news.set([]);
      const category = params['category'];
      this.searchedCategory.set(category);
      if (this.response()) {
        this.loadNews();
      }
    } else {
      this.news.set([]);
      const query = params['query'];
      this.searchedQuery.set(query);
      if (this.response()) {
        this.loadNews();
      }
    }
  }

  loadNews() {
    this.loading.set(true);
    let nextPage = this.response() ? this.response()?.nextPage : undefined;
    let searchCategory = this.searchedCategory() ?? undefined;
    let query = this.searchedQuery() ? `"${this.searchedQuery()}"` : undefined;
    this._newsService
      .getAllNews({
        page: nextPage,
        category: searchCategory,
        q: query
      })
      .subscribe({
        next: (res) => {
          this.response.set(res);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        },
      });
  }
}
