import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { Selection } from '@shared/interfaces';

@Component({
  selector: 'settings-selection-card',
  imports: [NgComponentOutlet],
  templateUrl: './settings-selection-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsSelectionCardComponent<T> {
  readonly selection = input.required<Selection<T>>();
  readonly currentSelection = input<T>();
  readonly selectedOption = output<T>();

  protected readonly isSelected = computed(
    () => this.selection().value === this.currentSelection(),
  );

  protected changeOption(): void {
    this.selectedOption.emit(this.selection().value);
  }

  protected readonly selectionRadioClasses = computed(() => {
    const baseClasses = 'bg-white rounded-full h-4 w-4';
    const activeClasses = 'border-4 dark:bg-neutral-800 border-blue-500';
    const unactiveClasses =
      'border-2 dark:bg-black border-neutral-200 dark:border-neutral-600';
    return `${baseClasses} ${this.isSelected() ? activeClasses : unactiveClasses}`;
  });
}
