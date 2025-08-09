import { Type } from '@angular/core';

export type ModalVariants = 'archive' | 'delete';
export interface ModalConfig {
  icon: Type<unknown>;
  buttonLabel: string;
  variant: 'primary' | 'danger';
  title: string;
  description: string;
}
