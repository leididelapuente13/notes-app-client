import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  Type,
  computed,
} from '@angular/core';
import { InputHintComponent } from './input-hint/input-hint.component';
import { IconShowComponent } from '../icons/icon-show/icon-show.component';

@Component({
  selector: 'app-input',
  imports: [NgComponentOutlet, TitleCasePipe, InputHintComponent],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  label = input<string>('');
  placeholder = input.required<string>();
  isDisabled = input<boolean>(false);
  isError = input<boolean>(false);
  hintMessage = input<string>('');
  iconName = input<'show'>();
  iconPlacement = input<'start' | 'end'>('start');

  protected readonly iconMap = signal(
    new Map<string, Type<unknown>>([['show', IconShowComponent]]),
  );

  protected currentIcon = computed(() => {
    const iconKey = this.iconName();
    if (!iconKey) return null;
    console.log(this.iconMap().get(iconKey) ?? null);
    return this.iconMap().get(iconKey) ?? null;
  });
}
