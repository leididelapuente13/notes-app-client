import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Note } from '@features/notes/interfaces/Note.interface';
import { NoteItemComponent } from './note-item/note-item.component';

@Component({
  selector: 'notes-list',
  imports: [NoteItemComponent],
  templateUrl: './notes-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent {
  readonly notes = input<Note[]>([]);
}
