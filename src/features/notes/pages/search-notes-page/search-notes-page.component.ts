import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { SectionTitleComponent, MessageComponent } from '@shared/components';
import { NotesListComponent } from '@features/notes/components/notes-list/notes-list.component';
import { Note } from '@features/notes/interfaces/Note.interface';
import { SearchBarComponent } from '@shared/components/layout/search-bar/search-bar.component';
import { SidebarComponent } from '@features/notes/components/sidebar/sidebar.component';
import { NoteDetailsComponent } from '@features/notes/components/note-details/note-details.component';
import { RightMenuComponent } from '@features/notes/components/right-menu/right-menu.component';
import { RightMenuOptions } from '@shared/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'notes-search-notes-page',
  imports: [
    SectionTitleComponent,
    NotesListComponent,
    MessageComponent,
    SearchBarComponent,
    SidebarComponent,
    NoteDetailsComponent,
    RightMenuComponent,
  ],
  templateUrl: './search-notes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class SearchNotesPageComponent {
  private readonly activeRoute = inject(ActivatedRoute);

  protected readonly inputValue = signal<string | null>(null);
  protected readonly menuControlOptions: RightMenuOptions[] = [
    'delete',
    'archive',
  ];
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

  protected readonly searchQueryParam = computed(
    () => this.activeRoute.snapshot.paramMap.get('query') ?? undefined,
  );
  protected readonly noteIdParam = computed(
    () => this.activeRoute.snapshot.paramMap.get('id') ?? undefined,
  );
  protected readonly route = computed(
    () => `/search/${this.searchQueryParam()}` as `/search/${string}`,
  );
}
export default SearchNotesPageComponent;
