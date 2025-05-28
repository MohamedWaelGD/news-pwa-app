import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    {
        path: 'news',
        loadComponent: () => import('./pages/news-page/news-page.component').then(m => m.NewsPageComponent)
    },
    {
        path: 'news/:query',
        loadComponent: () => import('./pages/news-page/news-page.component').then(m => m.NewsPageComponent)
    },
    {
        path: 'news-category/:category',
        loadComponent: () => import('./pages/news-page/news-page.component').then(m => m.NewsPageComponent),
        data: {
            searchWithCategory: true
        }
    }
];
