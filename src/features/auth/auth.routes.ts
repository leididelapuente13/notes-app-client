import { Routes } from '@angular/router';
import TemporalComponentComponent from '@features/notes/components/temporal-component/temporal-component.component';
import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';
import LoginPageComponent from './pages/login-page/login-page.component';
import SignupPageComponent from './pages/signup-page/signup-page.component';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => LoginPageComponent,
      },
      {
        path: 'signup',
        loadComponent: () => SignupPageComponent,
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
