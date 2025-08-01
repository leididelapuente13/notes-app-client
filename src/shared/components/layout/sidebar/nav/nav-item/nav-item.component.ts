import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconArrowRightComponent } from '@shared/components/ui/icons';
import { Link } from '@shared/interfaces';
@Component({
  selector: 'app-nav-item',
  imports: [
    NgComponentOutlet,
    RouterLink,
    RouterLinkActive,
    IconArrowRightComponent,
  ],
  templateUrl: './nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavItemComponent {
  item = input.required<Link>();
}
