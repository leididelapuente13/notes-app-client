import { Injectable, signal } from '@angular/core';
import { Fonts, FontsClasses } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  private readonly CACHE_FONT_KEY = 'notes-app-font';
  private readonly defaultFont = 'sans';

  private readonly _font = signal<Fonts>(this.getFont());

  private getCacheFont(): Fonts | undefined {
    const cacheFont = localStorage.getItem(this.CACHE_FONT_KEY);
    return cacheFont ? (cacheFont as Fonts) : undefined;
  }

  private cacheFont(font: Fonts) {
    localStorage.setItem(this.CACHE_FONT_KEY, font);
  }

  public updateFont(font: Fonts) {
    this.cacheFont(font);
    this._font.set(font);
  }

  public getFont(): Fonts {
    const cacheFont = this.getCacheFont();
    return cacheFont ?? this.defaultFont;
  }

  public get font() {
    return this._font.asReadonly();
  }

  public getFontClass(font: Fonts): FontsClasses {
    switch (font) {
      case 'mono':
        return 'font-mono';
      case 'sans':
        return 'font-sans';
      case 'serif':
        return 'font-serif';
    }
  }
}
