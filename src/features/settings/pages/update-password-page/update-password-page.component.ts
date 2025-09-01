import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonComponent, InputComponent } from '@shared/components';
import { HeadingComponent } from '@features/settings/components';

@Component({
  selector: 'settings-update-password-page',
  imports: [ButtonComponent, HeadingComponent, InputComponent],
  templateUrl: './update-password-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UpdatePasswordPageComponent {
  protected readonly clickedUpdatePassword = signal<boolean>(false);
}
