import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconLogoutComponent } from '@shared/components';

@Component({
  selector: 'auth-logout-button',
  imports: [IconLogoutComponent],
  templateUrl: './logout-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutButtonComponent {}
