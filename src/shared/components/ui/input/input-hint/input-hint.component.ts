import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconInfoComponent } from '../../icons';

@Component({
  selector: 'app-input-hint',
  imports: [IconInfoComponent],
  templateUrl: './input-hint.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputHintComponent {
  readonly message = input.required<string>();
  readonly isError = input<boolean>(false);
  readonly isDisabled = input<boolean>(false);

  iconStroke() {
    if (this.isError()) return 'error';
    if (this.isDisabled()) return 'neutral-300';
    return 'neutral-600';
  }

  textColor() {
    if (this.isError()) return 'text-red-500';
    if (this.isDisabled()) return 'text-neutral-300';
    return 'text-neutral-600';
  }
}
