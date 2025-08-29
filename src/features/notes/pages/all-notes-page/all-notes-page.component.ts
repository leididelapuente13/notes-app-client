import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RightMenuComponent } from '@features/notes/components/right-menu/right-menu.component';
import { NotesListComponent } from '@features/notes/components/notes-list/notes-list.component';
import { Note } from '@features/notes/interfaces/Note.interface';
import { SectionTitleComponent } from '@shared/components';
import { SidebarComponent } from '@features/notes/components/sidebar/sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { NoteDetailsComponent } from '@features/notes/components/note-details/note-details.component';
import { RightMenuOptions } from '@shared/interfaces';

@Component({
  selector: 'notes-all-notes-page',
  imports: [
    RightMenuComponent,
    NotesListComponent,
    SectionTitleComponent,
    SidebarComponent,
    NoteDetailsComponent,
  ],
  templateUrl: './all-notes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AllNotesPageComponent {
  private readonly activeRoute = inject(ActivatedRoute);

  protected menuControlOptions: RightMenuOptions[] = ['delete', 'archive'];
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
