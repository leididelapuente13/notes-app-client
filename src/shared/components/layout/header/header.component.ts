import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../ui/title/title.component';
import { SettingsIconComponent } from '../../ui/icons/settings-icon/settings-icon.component';

@Component({
  selector: 'app-header',
  imports: [SectionTitleComponent, SettingsIconComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
