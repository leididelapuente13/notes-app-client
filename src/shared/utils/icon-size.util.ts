import { IconSizeVariants } from '@shared/interfaces';
import { IconClasses } from '../interfaces/ui/icon.interface';

export const ICON_SIZES: Record<IconSizeVariants, IconClasses> = {
  xs: { class: 'w-4 h-4', pixels: '16x16' },
  sm: { class: 'w-[18px] h-[18px]', pixels: '18x18' },
  md: { class: 'w-5 h-5', pixels: '20x20' },
  lg: { class: 'w-6 h-6', pixels: '24x24' },
  xl: { class: 'w-8 h-8', pixels: '32x32' },
  customSm: { class: 'w-[12px] h-[11.99px]', pixels: '12x11.99' },
  customMd: { class: 'w-[18.5px] h-[19.5px]', pixels: '18.5x19.5' },
  customLg: { class: 'w-6 h-[25px]', pixels: '24x25' },
};

export const getIconSize = (variant: IconSizeVariants) => {
  return ICON_SIZES[variant].class;
};
