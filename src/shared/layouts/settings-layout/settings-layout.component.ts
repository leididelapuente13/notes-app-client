import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BottomNavigationComponent,
  HeaderComponent,
  SidebarComponent,
} from '@shared/components';
import { SettingsSidebarComponent } from '@features/settings/components';

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
export class SettingsLayoutComponent {}
