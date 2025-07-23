import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  title = input.required<string>();
}
