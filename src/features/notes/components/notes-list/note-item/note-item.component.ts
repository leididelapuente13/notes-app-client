import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Note } from '@features/notes/interfaces/Note.interface';

@Component({
  selector: 'notes-note-item',
  imports: [DatePipe, TitleCasePipe, RouterLink],
  templateUrl: './note-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteItemComponent {
  private readonly route = inject(ActivatedRoute);

  readonly note = input.required<Note>();
  protected readonly selectedNote = signal<string | null>(null);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.selectedNote.set(params.get('id'));
    });
  }

  isSelected(): boolean {
    console.log(this.selectedNote);
    if (!this.selectedNote) return false;
    console.log('item', this.selectedNote() === this.note().id);
    return this.selectedNote() === this.note().id;
  }
}
