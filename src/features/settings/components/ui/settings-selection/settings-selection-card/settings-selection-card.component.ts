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
}
