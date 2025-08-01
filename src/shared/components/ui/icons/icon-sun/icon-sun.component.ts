import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-sun',
  imports: [],
  templateUrl: './icon-sun.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSunComponent {
  active = input<boolean>(false);
}
