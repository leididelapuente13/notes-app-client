import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleService } from '@core/services/title.service';
import { LogoComponent, SectionTitleComponent } from '@shared/components/ui';
import { IconSettingsComponent } from '@shared/components/ui/icons';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    SectionTitleComponent,
    LogoComponent,
    IconSettingsComponent,
    SearchBarComponent,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  titleService = inject(TitleService);
  protected readonly searchValue = signal<string | null>(null);

  protected readonly titleValues = computed(() => {
    return this.titleService.getValues();
  });
}
