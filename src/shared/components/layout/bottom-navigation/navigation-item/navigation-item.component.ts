import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '@shared/interfaces';

@Component({
  selector: 'app-navigation-item',
  imports: [NgComponentOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navigation-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
  item = input.required<Link>();
}
