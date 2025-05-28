import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { newsEndpoints } from './news.endpoints';
import { News } from '../../models/news.model';
import { ApiResponse } from '../../models/api-response.model';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private _http = inject(HttpClient);

  getAllNews(
    searchOptions?: Partial<{
      page: string;
      size: number;
      category: string;
      q: string;
    }>
  ) {
    if (!searchOptions) {
      searchOptions = { page: '', size: 10, category: '', q: '' };
    }
    if (!searchOptions.page) {
      delete searchOptions.page;
    }
    if (!searchOptions.size) {
      searchOptions.size = 10;
    }
    if (!searchOptions.category) {
      delete searchOptions.category;
    }
    if (!searchOptions.q) {
      delete searchOptions.q;
    }
    return this._http.get<ApiResponse<News[]>>(newsEndpoints.latestNews, {
      params: searchOptions,
    });
  }
}
