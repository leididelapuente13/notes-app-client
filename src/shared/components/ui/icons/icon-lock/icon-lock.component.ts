import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { IconColorVariants, IconSizeVariants } from '@shared/interfaces';
import { getIconSize, getIconStrokeColor } from '@shared/utils';

@Component({
  selector: 'app-icon-lock',
  imports: [],
  templateUrl: './icon-lock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLockComponent {
  active = input<boolean>(false);

  lightVariant = input<IconColorVariants>('neutral-700');
  darkVariant = input<IconColorVariants>('neutral-200');

  lightActiveVariant = input<IconColorVariants>('neutral-950');
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

    const lightStrokeClass = getIconStrokeColor(lightColorVariant);
    const darkStrokeClass = getIconStrokeColor(darkColorVariant);
    return `${lightStrokeClass} dark:${darkStrokeClass}`;
  });
}
