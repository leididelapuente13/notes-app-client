import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-show',
  imports: [],
  templateUrl: './icon-show.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconShowComponent {
  color = input<'default' | 'light'>('default');
}
