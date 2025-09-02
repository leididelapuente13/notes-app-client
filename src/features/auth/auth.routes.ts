import { Routes } from '@angular/router';
import TemporalComponentComponent from '@features/notes/components/temporal-component/temporal-component.component';
import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'signup',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'forgot-password',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'reset-password',
        loadComponent: () => TemporalComponentComponent,
      },
    ],
  },
];

export default authRoutes;
