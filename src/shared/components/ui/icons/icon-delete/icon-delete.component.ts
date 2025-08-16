import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { IconColorVariants, IconSizeVariants } from '@shared/interfaces';
import { getIconSize, getIconStrokeColor } from '@shared/utils';

@Component({
  selector: 'app-icon-delete',
  imports: [],
  templateUrl: './icon-delete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDeleteComponent {
  lightVariant = input<IconColorVariants>('neutral-950');
  darkVariant = input<IconColorVariants>('white');

  size = input<IconSizeVariants>('lg');

  protected readonly iconSizeClass = computed(() => getIconSize(this.size()));

  protected readonly iconStrokeClass = computed(() => {
    return `${getIconStrokeColor(this.lightVariant())} dark:${getIconStrokeColor(this.darkVariant())}`;
  });
}
