import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { IconColorVariants, IconSizeVariants } from '@shared/interfaces';
import { getIconFillColor, getIconSize } from '@shared/utils';

@Component({
  selector: 'app-icon-home',
  imports: [],
  templateUrl: './icon-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHomeComponent {
  protected readonly active = input<boolean>(false);
  protected readonly size = input<IconSizeVariants>('lg');

  protected readonly lightVariant = input<IconColorVariants>('neutral-600');
  protected readonly darkVariant = input<IconColorVariants>('neutral-400');
  protected readonly lightActiveVariant =
    input<IconColorVariants>('neutral-950');
  protected readonly darkActiveVariant = input<IconColorVariants>('active');

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
