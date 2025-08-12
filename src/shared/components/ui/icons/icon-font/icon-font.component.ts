import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { IconColorVariants, IconSizeVariants } from '@shared/interfaces';
import { getIconFillColor, getIconSize } from '@shared/utils';

@Component({
  selector: 'app-icon-font',
  imports: [],
  templateUrl: './icon-font.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFontComponent {
  active = input<boolean>(false);

  lightVariant = input<IconColorVariants>('neutral-700');
  darkVariant = input<IconColorVariants>('neutral-200');

  lightActiveVariant = input<IconColorVariants>('neutral-950');
  darkActiveVariant = input<IconColorVariants>('active');
  size = input<IconSizeVariants>('md');

  protected readonly iconSizeClass = computed(() => getIconSize(this.size()));

  protected readonly iconStrokeClass = computed(() => {
    if (this.active()) {
      return `${getIconFillColor(this.lightActiveVariant())} dark:${getIconFillColor(this.darkActiveVariant())} `;
    }
    return `${getIconFillColor(this.lightVariant())} dark:${getIconFillColor(this.darkVariant())} `;
  });
}
