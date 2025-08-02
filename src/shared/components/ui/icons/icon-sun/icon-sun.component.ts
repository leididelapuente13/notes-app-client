import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-sun',
  imports: [],
  templateUrl: './icon-sun.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSunComponent {
  active = input<boolean>(false);
  color = input<'white' | 'neutral'>('neutral');

  constructor() {
    console.log(this.color(), typeof this.color());
  }
}
