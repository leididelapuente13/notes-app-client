import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {
  BottomNavigationComponent,
  HeaderComponent,
  SidebarComponent,
} from '@shared/components';
import { SettingsSidebarComponent } from '@features/settings/components';
import { filter } from 'rxjs';

@Component({
  selector: 'app-settings-layout',
  imports: [
    BottomNavigationComponent,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    SettingsSidebarComponent,
  ],
  templateUrl: './settings-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsLayoutComponent {
  private readonly router = inject(Router);

  protected readonly currentRoute = signal(this.router.url);

  constructor() {
    this.handleRouteChanges();
  }

  private handleRouteChanges() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute.set(event.url);
      });
  }

  renderSideBarInFullScreen(): boolean {
    return this.currentRoute() === '/settings';
  }
}
