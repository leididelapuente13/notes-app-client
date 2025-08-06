import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../ui/title/title.component';
import { LogoComponent } from '../../ui/logo/logo.component';
import { IconSettingsComponent } from '../../ui/icons/icon-settings/icon-settings.component';
import { RouterLink } from '@angular/router';
import { InputComponent } from '@shared/components/ui/input/input.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    SectionTitleComponent,
    LogoComponent,
    IconSettingsComponent,
    InputComponent,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
