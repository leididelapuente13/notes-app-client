import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconColorVariants, IconSizeVariants } from '@shared/interfaces';
import { getIconFillColor, getIconSize } from '@shared/utils';

@Component({
  selector: 'app-icon-font-serif',
  imports: [],
  templateUrl: './icon-font-serif.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFontSerifComponent {
  active = input<boolean>(false);

  lightVariant = input<IconColorVariants>('black');
  darkVariant = input<IconColorVariants>('white');

  lightActiveVariant = input<IconColorVariants>('active');
  darkActiveVariant = input<IconColorVariants>('active');
  size = input<IconSizeVariants>('md');

  protected readonly iconSizeClass = computed(() => getIconSize(this.size()));

  protected readonly iconStrokeClass = computed(() => {
    const isActive = this.active();

    const lightColorVariant = isActive
      ? this.lightActiveVariant()
      : this.lightVariant();
    const darkColorVariant = isActive
      ? this.darkActiveVariant()
      : this.darkVariant();

    const lightStrokeClass = getIconFillColor(lightColorVariant);
    const darkStrokeClass = getIconFillColor(darkColorVariant);
    return `${lightStrokeClass} dark:${darkStrokeClass}`;
  });
}
