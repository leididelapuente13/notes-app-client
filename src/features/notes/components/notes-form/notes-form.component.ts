import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { Note } from '@features/notes/interfaces/Note.interface';
import {
  IconTagComponent,
  IconClockComponent,
  ButtonComponent,
} from '@shared/components';
import { HeaderControlComponent } from '../header-control/header-control.component';

@Component({
  selector: 'notes-form',
  imports: [
    DatePipe,
    HeaderControlComponent,
    IconTagComponent,
    IconClockComponent,
    ButtonComponent,
  ],
  templateUrl: './notes-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesFormComponent {
  readonly noteId = input<string>();

  readonly resetForm = input<boolean>(false);
  readonly note = signal<Note | undefined>(undefined);

  protected getNoteData() {
    if (!this.noteId()) return;
    console.log(this.noteId());
  }
}
