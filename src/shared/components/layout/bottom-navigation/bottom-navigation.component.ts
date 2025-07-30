import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from '@shared/interfaces/ui/link.interface';
import {
  IconArchiveComponent,
  IconHomeComponent,
  IconSearchComponent,
  IconSettingsComponent,
  IconTagComponent,
} from '@shared/components/ui/icons';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@Component({
  selector: 'app-bottom-navigation',
  imports: [NavigationItemComponent],
  templateUrl: './bottom-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomNavigationComponent {
  routes: Link[] = [
    {
      path: 'all',
      icon: IconHomeComponent,
      label: 'Home',
    },
    {
      path: 'search',
      icon: IconSearchComponent,
      label: 'Search',
    },
    {
      path: 'archived',
      icon: IconArchiveComponent,
      label: 'Archived',
    },
    {
      path: 'tags',
      icon: IconTagComponent,
      label: 'Tags',
    },
    {
      path: 'settings',
      icon: IconSettingsComponent,
      label: 'Settings',
      isAbsolute: true,
    },
  ];
}
