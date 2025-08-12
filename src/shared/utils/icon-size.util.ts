import { IconSizeVariants } from '@shared/interfaces';
import { IconClasses } from '../interfaces/ui/icon.interface';

export const ICON_SIZES: Record<IconSizeVariants, IconClasses> = {
  xs: { class: 'w-4 h-4', pixels: '16x16' },
  sm: { class: 'w-[18px] h-[18px]', pixels: '18x18' },
  md: { class: 'w-5 h-5', pixels: '20x20' },
  lg: { class: 'w-6 h-6', pixels: '24x24' },
  xl: { class: 'w-8 h-8', pixels: '32x32' },
  custom: { class: 'w-[6px] h-[10px]', pixels: '6x10' },
};

export const getIconSize = (variant: IconSizeVariants) => {
  return ICON_SIZES[variant].class;
};
