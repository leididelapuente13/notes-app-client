import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-info',
  imports: [],
  templateUrl: './icon-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconInfoComponent {
  color = input<'neutral' | 'red'>('neutral');
}
