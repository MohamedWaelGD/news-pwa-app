import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkLightModeService {

  private darkModeKey = 'dark';
  private darkModeStorageKey = 'news-pwa-app-darkMode';

  isDarkMode() {
    const darkMode = localStorage.getItem(this.darkModeStorageKey);
    return darkMode === 'true';
  }

  checkDarkMode() {
    const isDarkMode = this.isDarkMode();
    document.documentElement.classList.toggle(this.darkModeKey, isDarkMode);
  }

  toggleDarkMode() {
    const isDarkMode = this.isDarkMode();
    this.setDarkMode(!isDarkMode);
  }

  private setDarkMode(isDarkMode: boolean) {
    localStorage.setItem(this.darkModeStorageKey, String(isDarkMode));
    document.documentElement.classList.toggle(this.darkModeKey, isDarkMode);
  }
}
