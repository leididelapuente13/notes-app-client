import { Routes } from '@angular/router';
import authRoutes from '@features/auth/auth.routes';
import notesRouter from '@features/notes/notes.routes';
import settingsRouter from '@features/settings/settings.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  ...authRoutes,
  ...notesRouter,
  ...settingsRouter,
];
