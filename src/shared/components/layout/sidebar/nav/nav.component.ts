import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IconArchiveComponent,
  IconHomeComponent,
} from '@shared/components/ui/icons';
import { Link } from '@shared/interfaces';
import { NavItemComponent } from "./nav-item/nav-item.component";

@Component({
  selector: 'app-nav',
  imports: [NavItemComponent],
  templateUrl: './nav.component.html',
  styles: `
    .active {
      background-color: var(--color-neutral-800);
      border-radius: var(--radius-lg);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  routes: Link[] = [
    {
      label: 'All Notes',
      path: '/notes/all',
      icon: IconHomeComponent,
    },
    {
      label: 'Archived Notes',
      path: '/notes/archived',
      icon: IconArchiveComponent,
    },
  ];
}
