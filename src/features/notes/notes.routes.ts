import { Routes } from '@angular/router';
import TemporalComponentComponent from './components/temporal-component/temporal-component.component';
import { NotesLayoutComponent } from '@shared/layouts/notes-layout/notes-layout.component';
import AllNotesPageComponent from './pages/all-notes-page/all-notes-page.component';

const notesRouter: Routes = [
  {
    path: 'notes',
    component: NotesLayoutComponent,
    children: [
      {
        path: 'all',
        loadComponent: () => AllNotesPageComponent,
      },
      {
        path: 'all/:id',
        loadComponent: () => AllNotesPageComponent,
      },
      {
        path: 'archived',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'details/:id',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'form',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'search',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'tags',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'tags/:tag',
        loadComponent: () => TemporalComponentComponent,
      },
    ],
  },
];

export default notesRouter;
