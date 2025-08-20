import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagsStateService {
  private readonly router = inject(Router);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
  );

  readonly selectedTag = computed(() => {
    const url = this.currentUrl();
    if (!url) return null;

    const tagMatch = url.match(/\/notes\/tags\/([^/]+)/);
    return tagMatch ? decodeURIComponent(tagMatch[1]) : null;
  });

  navigateToTag(tag: string): void {
    this.router.navigate(['/notes/tags', tag]);
  }

  clearTagSelection(): void {
    this.router.navigate(['/notes/all']);
  }
}
