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
  readonly active = input<boolean>(false);
  readonly size = input<IconSizeVariants>('lg');

  readonly lightVariant = input<IconColorVariants>('neutral-600');
  readonly darkVariant = input<IconColorVariants>('neutral-400');
  readonly lightActiveVariant = input<IconColorVariants>('neutral-950');
  readonly darkActiveVariant = input<IconColorVariants>('active');

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
