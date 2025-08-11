import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-icon-archived',
  imports: [],
  templateUrl: './icon-archive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArchiveComponent {
  active = input<boolean>(false);

  lightVariant = input<'neutralDark' | 'neutralLight'>('neutralDark');
  darkVariant = input<'white' | 'neutralPrimary' | 'neutralSecondary'>('white');

  lightActiveVariant = input<'blue'>('blue');
  darkActiveVariant = input<'blue'>('blue');

  size = input<'xs' | 'sm' | 'md'>('sm');

  protected readonly iconSize = computed(() => {
    const sizeMap = {
      xs: 'w-4 h-4', // 16x16
      sm: 'w-[18px] h-[18px]', // 18x18
      md: 'w-6 h-6', // 24x24
      lg: 'w-8 h-8', // 32x32
    };
    return sizeMap[this.size()];
  });

  protected readonly iconStroke = computed(() => {
    const lightStrokeMap = {
      neutralDark: 'stroke-neutral-950',
      neutralLight: 'stroke-neutral-600',
    };

    const darkStrokeMap = {
      neutralPrimary: 'stroke-neutral-400',
      neutralSecondary: 'stroke-neutral-300',
      white: 'stroke-white',
    };

    const lightActiveStrokeMap = {
      blue: 'stroke-blue-500',
    };

    const darkActiveStrokeMap = {
      blue: 'stroke-blue-500',
    };

    if (this.active())
      return `${lightActiveStrokeMap[this.lightActiveVariant()]} dark:${darkActiveStrokeMap[this.darkActiveVariant()]}`;

    return `${lightStrokeMap[this.lightVariant()]} dark:${darkStrokeMap[this.darkVariant()]} `;
  });
}
