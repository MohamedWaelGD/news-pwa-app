import { Component, input } from '@angular/core';
import { News } from '../../../core/models/news.model';
import { placeholderNewsNoPreview } from '../../../core/utilities/placeholder-images';
import { ClipTextPipe } from "../../pipes/clip-text.pipe";

@Component({
  selector: 'app-news-block',
  imports: [ClipTextPipe],
  templateUrl: './news-block.component.html',
  styleUrl: './news-block.component.scss'
})
export class NewsBlockComponent {
  public news = input.required<News>();
  protected placeholderNewsNoPreview = placeholderNewsNoPreview;
}
