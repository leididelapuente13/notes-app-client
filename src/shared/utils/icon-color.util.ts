import { IconColorVariants } from '@shared/interfaces';

export const ICON_STROKE_COLORS: Record<IconColorVariants, { color: string }> =
  {
    // Neutral colors
    'neutral-200': { color: 'stroke-neutral-200' },
    'neutral-300': { color: 'stroke-neutral-300' },
    'neutral-400': { color: 'stroke-neutral-400' },
    'neutral-500': { color: 'stroke-neutral-500' },
    'neutral-600': { color: 'stroke-neutral-600' },
    'neutral-700': { color: 'stroke-neutral-700' },
    'neutral-950': { color: 'stroke-neutral-950' },

    // Theme-aware colors
    // 'primary': { color: 'stroke-neutral-950', dark: 'stroke-white' },
    // 'secondary': { color: 'stroke-neutral-600', dark: 'stroke-neutral-400' },
    // 'accent': { color: 'stroke-neutral-700', dark: 'stroke-neutral-200' },

    // Status colors
    active: { color: 'stroke-blue-500' },
    success: { color: 'stroke-green-500' },
    error: { color: 'stroke-red-500' },

    // Special colors
    black: { color: 'stroke-black' },
    white: { color: 'stroke-white' },
  } as const;

export const ICON_FILL_COLORS: Record<IconColorVariants, { color: string }> = {
  // Neutral colors
  'neutral-200': { color: 'fill-neutral-200' },
  'neutral-300': { color: 'fill-neutral-300' },
  'neutral-400': { color: 'fill-neutral-400' },
  'neutral-500': { color: 'fill-neutral-500' },
  'neutral-600': { color: 'fill-neutral-600' },
  'neutral-700': { color: 'fill-neutral-700' },
  'neutral-950': { color: 'fill-neutral-950' },

  // Theme-aware colors
  // 'primary': { color: 'fill-neutral-950', dark: 'fill-white' },
  // 'secondary': { color: 'fill-neutral-600', dark: 'fill-neutral-400' },
  // 'accent': { color: 'fill-neutral-700', dark: 'fill-neutral-200' },

  // Status colors
  active: { color: 'fill-blue-500' },
  success: { color: 'fill-green-500' },
  error: { color: 'fill-red-500' },

  // Special colors
  black: { color: 'fill-black' },
  white: { color: 'fill-white' },
} as const;

export const getIconStrokeColor = (variant: IconColorVariants) => {
  return ICON_STROKE_COLORS[variant].color;
};

export const getIconFillColor = (variant: IconColorVariants) => {
  return ICON_FILL_COLORS[variant].color;
};
