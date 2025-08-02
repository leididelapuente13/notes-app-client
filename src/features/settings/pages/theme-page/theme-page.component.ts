import { ChangeDetectionStrategy, Component } from '@angular/core';
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

@Component({
  selector: 'settings-theme-page',
  imports: [HeadingComponent, SettingsSelectionComponent],
  templateUrl: './theme-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ThemePageComponent {
  themeSelectionComponent = new SettingsSelectionComponent<Themes>();

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
}
export default ThemePageComponent;
