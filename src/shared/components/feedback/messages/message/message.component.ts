import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  readonly variant = input.required<'archived' | 'search' | 'tag'>();
  readonly match = input<string>('');
}
/**
 * All your archived notes are stored here. You can restore or delete them anytime.
 *
 * All notes matching ”Dev” are displayed below.
 *
 * All notes matching ”Bananas” are displayed below.
 */
