import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LogoComponent,
  SectionTitleComponent,
  InputComponent,
  ButtonComponent,
  IconGoogleComponent,
} from '@shared/components';

@Component({
  selector: 'app-login-page',
  imports: [
    LogoComponent,
    SectionTitleComponent,
    InputComponent,
    ButtonComponent,
    RouterLink,
    IconGoogleComponent,
  ],
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPageComponent {
  protected readonly GoogleIcon = IconGoogleComponent;
}
