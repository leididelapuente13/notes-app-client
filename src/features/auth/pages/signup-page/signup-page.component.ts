import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
  SectionTitleComponent,
  LogoComponent,
  IconGoogleComponent,
} from '@shared/components';

@Component({
  selector: 'auth-signup-page',
  imports: [
    ButtonComponent,
    InputComponent,
    SectionTitleComponent,
    LogoComponent,
  ],
  templateUrl: './signup-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignupPageComponent {
  protected readonly GoogleIcon = IconGoogleComponent;
}
