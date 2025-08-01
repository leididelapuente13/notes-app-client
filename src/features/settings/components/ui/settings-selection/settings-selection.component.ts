import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
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
  settingsSelectionCardComponent = new SettingsSelectionCardComponent<T>();
  readonly selections = input.required<Selection<T>[]>();
  readonly currentSelection = output<T>();
}
