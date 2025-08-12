import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { IconColorVariants, IconSizeVariants } from '@shared/interfaces';
import { getIconFillColor, getIconSize } from '@shared/utils';

@Component({
  selector: 'app-icon-show',
  imports: [],
  templateUrl: './icon-show.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShowComponent {
  lightVariant = input<IconColorVariants>('neutral-950');
  darkVariant = input<IconColorVariants>('white');

  lightActiveVariant = input<IconColorVariants>('active');
  darkActiveVariant = input<IconColorVariants>('active');
  size = input<IconSizeVariants>('lg');

  protected readonly iconSizeClass = computed(() => getIconSize(this.size()));

  protected readonly iconStrokeClass = computed(() => {
    return `${getIconFillColor(this.lightVariant())} dark:${getIconFillColor(this.darkVariant())} `;
  });
}
