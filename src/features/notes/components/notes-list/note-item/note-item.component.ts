import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
  OnInit,
  computed,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Note } from '@features/notes/interfaces/Note.interface';

@Component({
  selector: 'notes-note-item',
  imports: [DatePipe, TitleCasePipe, RouterLink],
  templateUrl: './note-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteItemComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly note = input.required<Note>();
  protected readonly selectedNote = signal<string | null>(null);
  protected readonly isSelected = computed(() => {
    if (!this.selectedNote()) return false;
    return this.selectedNote() === this.note().id;
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedNote.set(params.get('id'));
    });
  }
}
