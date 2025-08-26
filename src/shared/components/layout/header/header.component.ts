import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleService } from '@core/services/title.service';
import {
  InputComponent,
  LogoComponent,
  SectionTitleComponent,
} from '@shared/components/ui';
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
export class HeaderComponent {
  titleService = inject(TitleService);

  protected readonly titleValues = computed(() => {
    return this.titleService.getValues();
  });
}
