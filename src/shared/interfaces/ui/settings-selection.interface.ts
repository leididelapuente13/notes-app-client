import { Type } from '@angular/core';

export interface Selection<T> {
  icon: Type<unknown>;
  title: string;
  description: string;
  value: T;
}
