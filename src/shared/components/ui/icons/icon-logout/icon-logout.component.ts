import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-logout',
  imports: [],
  templateUrl: './icon-logout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLogoutComponent {
  active = input<boolean>(false);
}
