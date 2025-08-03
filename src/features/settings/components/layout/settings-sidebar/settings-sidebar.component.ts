import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
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
  renderInFullScreen = input.required<boolean>();

  protected readonly sidebarClasses = computed(() => {
    const baseClasses =
      'w-screen lg:w-[258px] h-full border-solid border-r border-neutral-200 dark:border-neutral-200/30 overflow-y-auto';

    if (this.renderInFullScreen()) {
      return `block px-4 py-6 md:px-8 ${baseClasses}`;
    }

    return `hidden lg:block ${baseClasses} py-5 pl-[32px] pr-[16px]`;
  });

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
