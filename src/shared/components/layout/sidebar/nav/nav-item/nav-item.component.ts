import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconArrowRightComponent } from '@shared/components/ui/icons';
import { IconColorVariants, Link } from '@shared/interfaces';
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
  paddingSize = input.required<'sm' | 'md'>();
  iconLightActiveColor = input<IconColorVariants>('neutral-950');
  iconDarkActiveColor = input<IconColorVariants>('active');

  protected readonly paddingClasses = computed(() =>
    this.paddingSize() === 'md' ? 'py-2.5 px-3' : 'p-2',
  );
}
