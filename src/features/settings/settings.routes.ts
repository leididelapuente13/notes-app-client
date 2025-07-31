import { Routes } from '@angular/router';
import TemporalComponentComponent from '@features/notes/components/temporal-component/temporal-component.component';
import { NotesLayoutComponent } from '@shared/layouts/notes-layout/notes-layout.component';

const settingsRouter: Routes = [
  {
    path: 'settings',
    // TODO: Replace for config layout
    component: NotesLayoutComponent,
    children: [
      {
        path: 'theme',
        loadComponent: () => TemporalComponentComponent,
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
