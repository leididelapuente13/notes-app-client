import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { Themes, ThemeType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly CACHE_THEME_KEY = 'notes-app-theme';
  public currentTheme = signal<Themes>('system');

  private getDeviceTheme(): ThemeType {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private getCacheTheme(): ThemeType | undefined {
    const cacheTheme = localStorage.getItem(this.CACHE_THEME_KEY);
    return cacheTheme ? (cacheTheme as ThemeType) : undefined;
  }

  private cacheTheme(theme: Themes): void {
    localStorage.setItem(this.CACHE_THEME_KEY, theme);
  }

  private toggleThemeClass(theme: Themes) {
    const validTheme: ThemeType =
      theme == 'system' ? this.getDeviceTheme() : theme;
    if (validTheme === 'dark') {
      this.document.body.classList.add('dark');
    } else {
      this.document.body.classList.remove('dark');
    }
  }

  public updateTheme(theme: Themes) {
    this.currentTheme.set(theme);
    this.toggleThemeClass(this.currentTheme());
    this.cacheTheme(this.currentTheme());
    console.log(this.currentTheme());
  }

  public getTheme(): Themes {
    const cacheTheme = this.getCacheTheme();
    return cacheTheme ?? this.currentTheme();
  }

  constructor() {
    this.toggleThemeClass(this.currentTheme());
  }
}
