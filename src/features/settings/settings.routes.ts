import { Routes } from '@angular/router';
import TemporalComponentComponent from '@features/notes/components/temporal-component/temporal-component.component';
import { SettingsLayoutComponent } from '@shared/layouts/settings-layout/settings-layout.component';
import ThemePageComponent from './pages/theme-page/theme-page.component';

const settingsRouter: Routes = [
  {
    path: 'settings',
    component: SettingsLayoutComponent,
    children: [
      {
        path: 'theme',
        loadComponent: () => ThemePageComponent,
      },
      {
        path: 'font',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'change-password',
        loadComponent: () => TemporalComponentComponent,
      },
    ],
  },
];

export default settingsRouter;
