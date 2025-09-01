import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'settings-heading',
  imports: [],
  templateUrl: './heading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {
  title = input.required<string>();
  description = input<string>();
}
