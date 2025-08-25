import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  readonly variant = input.required<'archived' | 'search' | 'tags'>();
  readonly match = input<string>('');
}
