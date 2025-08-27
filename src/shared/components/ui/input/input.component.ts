import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  Type,
  computed,
  output,
} from '@angular/core';
import { InputHintComponent } from './input-hint/input-hint.component';
import { IconShowComponent } from '../icons/icon-show/icon-show.component';
import { IconSearchComponent } from '../icons';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [
    NgComponentOutlet,
    TitleCasePipe,
    InputHintComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  readonly name = input.required<string>();
  readonly label = input<string>('');
  readonly placeholder = input.required<string>();
  readonly type = input<'text' | 'email' | 'number' | 'password'>('text');
  readonly isDisabled = input<boolean>(false);
  readonly isError = input<boolean>(false);
  readonly hintMessage = input<string>('');
  readonly iconName = input<'show' | 'search'>();
  readonly iconPlacement = input<'start' | 'end'>('start');

  protected readonly inputControl = new FormControl('', Validators.required);

  value = output<string | null>();

  protected readonly iconMap = signal(
    new Map<string, Type<unknown>>([
      ['show', IconShowComponent],
      ['search', IconSearchComponent],
    ]),
  );

  protected readonly inputClasses = computed(() => {
    const baseClasses =
      'shadow-sm bg-inherit flex items-center gap-x-2 pl-4 pr-3 mt-1.5 border border-solid border-neutral-300 rounded-8';
    const hoverClasses = 'hover:bg-neutral-50 hover:dark:bg-neutral-800';
    const focusClasses =
      'focus-within:outline-2  focus-within:outline-neutral-300 focus-within:outline-offset-2 focus-within:border-neutral-950 focus-within:dark:border-white';
    const errorClasses = `${baseClasses} border-red-500`;
    const disabledClasses = `${baseClasses} bg-neutral-50 hover:dark:bg-neutral-800`;

    if (this.isError()) return errorClasses;
    if (this.isDisabled()) return disabledClasses;
    return `${baseClasses} ${hoverClasses} ${focusClasses}`;
  });

  protected currentIcon = computed(() => {
    const iconKey = this.iconName();
    if (!iconKey) return null;
    return this.iconMap().get(iconKey) ?? null;
  });
}
