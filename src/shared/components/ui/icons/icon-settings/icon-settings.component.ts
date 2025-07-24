import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-settings',
  imports: [],
  templateUrl: './icon-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSettingsComponent {
  active = input<boolean>(false);
}
