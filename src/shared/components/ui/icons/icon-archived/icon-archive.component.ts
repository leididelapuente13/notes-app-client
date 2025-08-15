import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { IconColorVariants, IconSizeVariants } from '@shared/interfaces';
import { getIconSize, getIconStrokeColor } from '@shared/utils';

@Component({
  selector: 'app-icon-archived',
  imports: [],
  templateUrl: './icon-archive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArchiveComponent {
  protected readonly active = input<boolean>(false);
  protected readonly size = input<IconSizeVariants>('lg');

  protected readonly lightVariant = input<IconColorVariants>('neutral-600');
  protected readonly darkVariant = input<IconColorVariants>('neutral-400');
  protected readonly lightActiveVariant =
    input<IconColorVariants>('neutral-950');
  protected readonly darkActiveVariant = input<IconColorVariants>('active');

  protected readonly iconSizeClass = computed(() => getIconSize(this.size()));

  protected readonly iconFillLightClass = computed(() => {
    const isActive = this.active();

    const lightColor = isActive
      ? this.lightActiveVariant()
      : this.lightVariant();
    const lightClass = getIconStrokeColor(lightColor);

    return lightClass;
  });

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
