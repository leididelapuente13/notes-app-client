import { Type } from '@angular/core';

export interface Link {
  label: string;
  path: string;
  icon: Type<unknown>;
  isAbsolute?: boolean;
}
