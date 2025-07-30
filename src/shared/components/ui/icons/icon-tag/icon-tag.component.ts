import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-tag',
  imports: [],
  templateUrl: './icon-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTagComponent {
  active = input<boolean>(false);
}
