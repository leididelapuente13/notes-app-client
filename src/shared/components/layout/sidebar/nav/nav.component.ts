import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconArchiveComponent } from 'src/shared/components/ui/icons/icon-archived/icon-archive.component';
import { IconHomeComponent } from 'src/shared/components/ui/icons/icon-home/icon-home.component';
import { Link } from 'src/shared/interfaces/ui/link.interface';
import { IconArrowRightComponent } from 'src/shared/components/ui/icons/icon-arrow-right/icon-arrow-right.component';

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
  notesRoutes: Link[] = [
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
