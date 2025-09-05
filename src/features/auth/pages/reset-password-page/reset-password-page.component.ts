import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SectionTitleComponent,
  LogoComponent,
  InputComponent,
  ButtonComponent,
} from '@shared/components';

@Component({
  selector: 'auth-reset-password-page',
  imports: [
    SectionTitleComponent,
    LogoComponent,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './reset-password-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResetPasswordPageComponent {}
