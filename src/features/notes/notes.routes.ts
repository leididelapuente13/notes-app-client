import { Routes } from '@angular/router';
import TemporalComponentComponent from './components/temporal-component/temporal-component.component';
import { NotesLayoutComponent } from '@shared/layouts/notes-layout/notes-layout.component';
import AllNotesPageComponent from './pages/all-notes-page/all-notes-page.component';
import ArchivedNotesPageComponent from './pages/archived-notes-page/archived-notes-page.component';
import TaggedNotesPageComponent from './pages/tagged-notes-page/tagged-notes-page.component';
import TagsPageComponent from './pages/tags-page/tags-page.component';

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
        loadComponent: () => ArchivedNotesPageComponent,
      },
      {
        path: 'archived/:id',
        loadComponent: () => ArchivedNotesPageComponent,
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
        loadComponent: () => TagsPageComponent,
      },
      {
        path: 'tags/:tag',
        loadComponent: () => TaggedNotesPageComponent,
      },
      {
        path: 'tags/:tag/:id',
        loadComponent: () => TaggedNotesPageComponent,
      },
    ],
  },
];

export default notesRouter;
