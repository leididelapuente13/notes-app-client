import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';
import LoginPageComponent from './pages/login-page/login-page.component';
import SignupPageComponent from './pages/signup-page/signup-page.component';
import ForgotPasswordPageComponent from './pages/forgot-password-page/forgot-password-page.component';
import ResetPasswordPageComponent from './pages/reset-password-page/reset-password-page.component';

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
        loadComponent: () => ForgotPasswordPageComponent,
      },
      {
        path: 'reset-password',
        loadComponent: () => ResetPasswordPageComponent,
      },
    ],
  },
];

export default authRoutes;
