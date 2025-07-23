import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IconArchiveComponent,
  IconHomeComponent,
  IconArrowRightComponent,
} from '@shared/components/ui/icons';
import { Link } from '@shared/interfaces';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgComponentOutlet,
    IconArrowRightComponent,
  ],
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
      path: 'all',
      icon: IconHomeComponent,
    },
    {
      label: 'Archived Notes',
      path: 'archived',
      icon: IconArchiveComponent,
    },
  ];
}
