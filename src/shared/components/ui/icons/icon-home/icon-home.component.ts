import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-home',
  imports: [],
  templateUrl: './icon-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHomeComponent {
  active = input<boolean>(false);
}
