import { Component, input } from '@angular/core';
import { News } from '../../../../core/models/news.model';
import { LoadingSpinnerComponent } from "../../../../shared/components/loading-spinner/loading-spinner.component";
import { NewsBlockComponent } from "../../../../shared/components/news-block/news-block.component";

@Component({
  selector: 'app-extra-topics',
  imports: [LoadingSpinnerComponent, NewsBlockComponent],
  templateUrl: './extra-topics.component.html',
  styleUrl: './extra-topics.component.scss'
})
export class ExtraTopicsComponent {
  public news = input<News[]>([]);
  public loading = input(false);
}
