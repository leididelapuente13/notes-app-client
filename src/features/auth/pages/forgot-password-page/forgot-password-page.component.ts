import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  SectionTitleComponent,
  InputComponent,
  ButtonComponent,
  LogoComponent,
} from '@shared/components';

@Component({
  selector: 'auth-forgot-password-page',
  imports: [
    SectionTitleComponent,
    InputComponent,
    ButtonComponent,
    LogoComponent,
  ],
  templateUrl: './forgot-password-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordPageComponent {}
