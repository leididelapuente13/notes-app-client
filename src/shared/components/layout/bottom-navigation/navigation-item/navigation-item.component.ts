import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '@shared/interfaces';

@Component({
  selector: 'app-navigation-item',
  imports: [NgComponentOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navigation-item.component.html',
  styles: `
    .active {
      background-color: var(--color-blue-500);
      padding-block: 4px;
      border-radius: 4px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
  item = input.required<Link>();
}
