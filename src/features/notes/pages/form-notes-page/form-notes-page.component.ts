import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SidebarComponent } from '@features/notes/components/sidebar/sidebar.component';
import { Note } from '@features/notes/interfaces/Note.interface';
import { NotesFormComponent } from '@features/notes/components/notes-form/notes-form.component';

@Component({
  selector: 'notes-form-notes-page',
  imports: [SidebarComponent, NotesFormComponent],
  templateUrl: './form-notes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormNotesPageComponent {
  protected readonly notes = signal<Note[]>([
    {
      id: '1',
      title: 'Angular Signals Overview',
      content:
        'Learn how to use signals for reactive state management in Angular 20+.',
      updatedAt: new Date('2024-06-01T10:00:00Z'),
      tags: [],
      archived: false,
    },
    {
      id: '2',
      title: 'Standalone Components Best Practices',
      content:
        'Explore the benefits of standalone components and how to use them effectively.',
      updatedAt: new Date('2024-06-02T12:30:00Z'),
      tags: [],
      archived: false,
    },
    {
      id: '3',
      title: 'Optimizing Change Detection',
      content:
        'Tips and tricks for improving performance with OnPush change detection.',
      updatedAt: new Date('2024-06-03T09:15:00Z'),
      tags: [],
      archived: false,
    },
  ]);
}
