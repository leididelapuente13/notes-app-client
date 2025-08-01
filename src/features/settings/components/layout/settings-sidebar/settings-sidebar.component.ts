import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoutButtonComponent } from '@features/auth/components';
import {
  IconFontComponent,
  IconLockComponent,
  IconSunComponent,
  NavItemComponent,
} from '@shared/components';
import { Link } from '@shared/interfaces';

@Component({
  selector: 'settings-sidebar',
  imports: [NavItemComponent, LogoutButtonComponent],
  templateUrl: './settings-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsSidebarComponent {
  links: Link[] = [
    {
      label: 'Color Theme',
      path: '/settings/theme',
      icon: IconSunComponent,
    },
    {
      label: 'Font Theme',
      path: '/settings/font',
      icon: IconFontComponent,
    },
    {
      label: 'Change Password',
      path: '/settings/change-password',
      icon: IconLockComponent,
    },
  ];
}
