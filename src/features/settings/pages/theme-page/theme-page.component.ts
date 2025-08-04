import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  HeadingComponent,
  SettingsSelectionComponent,
} from '@features/settings/components';
import { Themes } from '@features/settings/types';
import {
  IconMoonComponent,
  IconSunComponent,
  IconSystemComponent,
} from '@shared/components';
import { Selection } from '@shared/interfaces';
import { ButtonComponent } from '@shared/components/ui/button/button.component';
import { ThemeService } from '@features/settings/services/theme.service';

@Component({
  selector: 'settings-theme-page',
  imports: [HeadingComponent, SettingsSelectionComponent, ButtonComponent],
  templateUrl: './theme-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ThemePageComponent {
  themeService = inject(ThemeService);
  themeSelectionComponent = new SettingsSelectionComponent<Themes>();
  currentTheme = computed(() => this.themeService.getTheme());
  themeSelection = signal<Themes | null>(this.currentTheme());

  readonly selections: Selection<Themes>[] = [
    {
      icon: IconSunComponent,
      title: 'Light Mode',
      description: 'Pick a clean and classic light theme',
      value: 'light',
    },
    {
      icon: IconMoonComponent,
      title: 'Dark Mode',
      description: 'Select a sleek and modern dark theme',
      value: 'dark',
    },
    {
      icon: IconSystemComponent,
      title: 'System',
      description: 'Adapts to your device’s theme',
      value: 'system',
    },
  ];

  updateThemeSelection(selection: Themes | null) {
    this.themeSelection.set(selection);
  }

  updateTheme = () => {
    this.themeService.updateTheme(this.themeSelection() ?? 'system');
  };
}
export default ThemePageComponent;
