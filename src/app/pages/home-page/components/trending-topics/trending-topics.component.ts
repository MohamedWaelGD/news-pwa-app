import { Component, computed, input } from '@angular/core';
import { News } from '../../../../core/models/news.model';
import { NewsCardComponent } from "../../../../shared/components/news-card/news-card.component";
import { LoadingSpinnerComponent } from "../../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-trending-topics',
  imports: [NewsCardComponent, LoadingSpinnerComponent],
  templateUrl: './trending-topics.component.html',
  styleUrl: './trending-topics.component.scss'
})
export class TrendingTopicsComponent {
  public news = input<News[]>([]);
  public loading = input(false);
}
