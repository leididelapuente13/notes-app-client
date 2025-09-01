import { Routes } from '@angular/router';
import { SettingsLayoutComponent } from '@shared/layouts/settings-layout/settings-layout.component';
import ThemePageComponent from './pages/theme-page/theme-page.component';
import FontPageComponent from './pages/font-page/font-page.component';
import UpdatePasswordPageComponent from './pages/update-password-page/update-password-page.component';

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
        loadComponent: () => FontPageComponent,
      },
      {
        path: 'change-password',
        loadComponent: () => UpdatePasswordPageComponent,
      },
    ],
  },
];

export default settingsRouter;
