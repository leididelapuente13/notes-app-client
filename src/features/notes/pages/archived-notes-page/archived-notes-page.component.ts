import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarComponent } from '@features/notes/components/sidebar/sidebar.component';
import { SectionTitleComponent, MessageComponent } from '@shared/components';
import { RightMenuComponent } from '@features/notes/components/right-menu/right-menu.component';
import { NoteDetailsComponent } from '@features/notes/components/note-details/note-details.component';
import { NotesListComponent } from '@features/notes/components/notes-list/notes-list.component';
import { ActivatedRoute } from '@angular/router';
import { Note } from '@features/notes/interfaces/Note.interface';
import { RightMenuOptions } from '@shared/interfaces';

@Component({
  selector: 'notes-archived-notes-page',
  imports: [
    SidebarComponent,
    SectionTitleComponent,
    RightMenuComponent,
    NoteDetailsComponent,
    NotesListComponent,
    MessageComponent,
  ],
  templateUrl: './archived-notes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ArchivedNotesPageComponent {
  private readonly activeRoute = inject(ActivatedRoute);

  protected menuControlOptions: RightMenuOptions[] = ['delete', 'restore'];
  protected readonly notes: Note[] = [
    {
      id: '1',
      title: 'eej',
      tags: ['s', 'm'],
      updatedAt: new Date('2024-06-01T12:00:00Z'),
      content: 'Sample note content',
      archived: false,
    },
    {
      id: '2',
      title: 'Angular Signals',
      tags: ['angular', 'signals'],
      updatedAt: new Date('2024-06-02T09:30:00Z'),
      content: 'Exploring the new signals API in Angular 20.',
      archived: false,
    },
    {
      id: '3',
      title: 'Archived Note',
      tags: ['archive'],
      updatedAt: new Date('2024-05-28T15:45:00Z'),
      content: 'This note is archived.',
      archived: true,
    },
    {
      id: '4',
      title: 'Archived Note',
      tags: ['archive'],
      updatedAt: new Date('2024-05-28T15:45:00Z'),
      content: 'This note is archived.',
      archived: true,
    },
    {
      id: '5',
      title: 'Archived Note',
      tags: ['archive'],
      updatedAt: new Date('2024-05-28T15:45:00Z'),
      content: 'This note is archived.',
      archived: true,
    },
  ];

  protected getRouteParams() {
    return this.activeRoute.snapshot.paramMap.get('id') ?? undefined;
  }
}
export default ArchivedNotesPageComponent;
