import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-font',
  imports: [],
  templateUrl: './icon-font.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFontComponent {
  active = input<boolean>(false);
}
