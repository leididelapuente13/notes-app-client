import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent, LogoComponent, SectionTitleComponent } from '@shared/components/ui';
import { IconSettingsComponent } from '@shared/components/ui/icons';

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
