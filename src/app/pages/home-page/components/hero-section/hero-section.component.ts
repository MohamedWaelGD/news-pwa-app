import {
  Component,
  effect,
  input,
} from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { News } from '../../../../core/models/news.model';
import { LoadingSpinnerComponent } from "../../../../shared/components/loading-spinner/loading-spinner.component";
import { placeholderNewsNoPreview } from '../../../../core/utilities/placeholder-images';

@Component({
  selector: 'app-hero-section',
  imports: [LoadingSpinnerComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  public news = input<News[]>([]);
  public loading = input(false);

  protected swiper?: Swiper;
  protected placeholderNewsNoPreview = placeholderNewsNoPreview;

  constructor() {
    effect(() => {
      if (this.news()) {
        setTimeout(() => {
          this.setupSwipper();
        })
      }
    })
  }

  setupSwipper(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
    
    this.swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
