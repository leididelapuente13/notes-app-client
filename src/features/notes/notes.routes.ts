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
        title: 'All Notes',
      },
      {
        path: 'all/:id',
        loadComponent: () => AllNotesPageComponent,
        title: 'All Notes',
      },
      {
        path: 'archived',
        loadComponent: () => ArchivedNotesPageComponent,
        title: 'Archived',
      },
      {
        path: 'archived/:id',
        loadComponent: () => ArchivedNotesPageComponent,
        title: 'Archived',
      },
      {
        path: 'details/:id',
        loadComponent: () => TemporalComponentComponent,
      },
      {
        path: 'form',
        loadComponent: () => TemporalComponentComponent,
        title: 'All Notes',
      },
      {
        path: 'search',
        loadComponent: () => TemporalComponentComponent,
        title: 'Showing results for',
      },
      {
        path: 'tags',
        loadComponent: () => TagsPageComponent,
        title: 'Tags',
      },
      {
        path: 'tags/:tag',
        loadComponent: () => TaggedNotesPageComponent,
        title: 'Notes tagged',
      },
      {
        path: 'tags/:tag/:id',
        loadComponent: () => TaggedNotesPageComponent,
        title: 'Notes tagged',
      },
    ],
  },
];

export default notesRouter;
