import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-state',
  imports: [RouterLink],
  templateUrl: './empty-state.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  readonly variant = input.required<'search' | 'archived' | 'all-notes'>();
}
