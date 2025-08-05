import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconInfoComponent } from '../../icons/icon-info/icon-info.component';

@Component({
  selector: 'app-input-hint',
  imports: [IconInfoComponent],
  templateUrl: './input-hint.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputHintComponent {
  readonly message = input.required<string>();
  readonly isError = input<boolean>(false);
}
