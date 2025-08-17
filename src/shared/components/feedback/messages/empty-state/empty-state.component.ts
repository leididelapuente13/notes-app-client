import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-state',
  imports: [RouterLink],
  templateUrl: './empty-state.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  variant = input.required<'search' | 'archived' | 'all-notes'>();
}

/**
 * All your archived notes are stored here. You can restore or delete them anytime.
 *
 * All notes matching ”Dev” are displayed below.
 *
 * All notes matching ”Bananas” are displayed below.
 */
