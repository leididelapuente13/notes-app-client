import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { Themes, ThemeType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly CACHE_THEME_KEY = 'notes-app-theme';
  public defaultTheme = signal<Themes>('system');

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
      theme === 'system' ? this.getDeviceTheme() : theme;
    if (validTheme === 'dark') {
      this.document.body.classList.add('dark');
    } else {
      this.document.body.classList.remove('dark');
    }
  }

  public updateTheme(theme: Themes) {
    this.toggleThemeClass(theme);
    this.cacheTheme(theme);
  }

  public getTheme(): Themes {
    const cacheTheme = this.getCacheTheme();
    return cacheTheme ?? this.defaultTheme();
  }

  constructor() {
    this.toggleThemeClass(this.getTheme());
  }
}
