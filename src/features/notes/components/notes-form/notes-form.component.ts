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
  readonly note = signal<Note>({
    id: '2',
    title: 'Angular Signals',
    tags: ['angular', 'signals'],
    updatedAt: new Date('2024-06-02T09:30:00Z'),
    content: 'Exploring the new signals API in Angular 20.',
    archived: false,
  });

  protected getNoteData() {
    if (!this.noteId()) return;
    console.log(this.noteId());
  }
}
