import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  private readonly _currentRoute = toSignal(
    this._router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(new NavigationEnd(0, '', '')),
      map(() => this._getDeepestRoute()),
    ),
    { initialValue: this._getDeepestRoute() },
  );

  private readonly _baseTitle = computed(() => {
    const route = this._currentRoute();
    return (
      route.snapshot.title || route.snapshot.data?.['title'] || 'All Notes'
    );
  });

  private readonly _routeParams = computed(() => {
    const route = this._currentRoute();
    return route.snapshot.paramMap;
  });

  readonly title = computed(() => {
    const baseTitle = this._baseTitle();
    const paramMap = this._routeParams();

    switch (baseTitle) {
      case 'Notes tagged':
        return paramMap.get('tag') ? 'Notes Tagged' : baseTitle;
      case 'Showing results for':
        return paramMap.get('query') ? 'Showing results for' : 'Search Results';
      default:
        return baseTitle;
    }
  });

  readonly match = computed(() => {
    const baseTitle = this._baseTitle();
    const paramMap = this._routeParams();

    switch (baseTitle) {
      case 'Notes tagged':
        return paramMap.get('tag') || undefined;
      case 'Showing results for':
        return paramMap.get('query') || undefined;
      default:
        return undefined;
    }
  });

  getValues(): { title: string; match?: string } {
    return {
      title: this.title(),
      match: this.match(),
    };
  }

  private _getDeepestRoute(): ActivatedRoute {
    let route = this._activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
