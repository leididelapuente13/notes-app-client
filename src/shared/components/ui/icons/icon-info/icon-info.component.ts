import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { IconColorVariants } from '@shared/interfaces';
import { getIconStrokeColor } from '@shared/utils';

@Component({
  selector: 'app-icon-info',
  imports: [],
  templateUrl: './icon-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconInfoComponent {
  lightVariant = input<IconColorVariants>('neutral-600');
  darkVariant = input<IconColorVariants>('neutral-600');

  protected readonly iconStrokeClass = computed(() => {
    return `${getIconStrokeColor(this.lightVariant())} dark:${getIconStrokeColor(this.darkVariant())}`;
  });
}
