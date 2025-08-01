import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Selection } from '@shared/interfaces';

@Component({
  selector: 'settings-selection-card',
  imports: [NgComponentOutlet],
  templateUrl: './settings-selection-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsSelectionCardComponent<T> {
  readonly selection = input.required<Selection<T>>();
}
