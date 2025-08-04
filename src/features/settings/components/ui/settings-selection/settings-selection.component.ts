import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { Selection } from '@shared/interfaces';
import { SettingsSelectionCardComponent } from './settings-selection-card/settings-selection-card.component';

@Component({
  selector: 'settings-selection',
  imports: [SettingsSelectionCardComponent],
  templateUrl: './settings-selection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsSelectionComponent<T> {
  readonly selections = input.required<Selection<T>[]>();
  readonly currentSelection = input<T>();
  readonly selectedOption = output<T | null>();
  private readonly _internalSelection = signal<T | undefined>(undefined);

  protected updateSelection(selection: T): void {
    this._internalSelection.set(selection);
    this.selectedOption.emit(selection);
  }

  protected getCurrentSelection(): T | undefined {
    return this._internalSelection() ?? this.currentSelection();
  }
}
