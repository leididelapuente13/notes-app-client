import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../ui/title/title.component';
import { LogoComponent } from '../../ui/logo/logo.component';
import { IconSettingsComponent } from '../../ui/icons/icon-settings/icon-settings.component';

@Component({
  selector: 'app-header',
  imports: [SectionTitleComponent, LogoComponent, IconSettingsComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
