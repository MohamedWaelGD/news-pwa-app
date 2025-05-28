import { Component, input } from '@angular/core';
import { News } from '../../../core/models/news.model';
import { placeholderNewsNoPreview } from '../../../core/utilities/placeholder-images';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  public news = input.required<News>();
  protected placeholderNewsNoPreview = placeholderNewsNoPreview;
}
