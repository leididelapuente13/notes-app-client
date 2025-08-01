import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-lock',
  imports: [],
  templateUrl: './icon-lock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLockComponent {
  active = input<boolean>(false);
}
