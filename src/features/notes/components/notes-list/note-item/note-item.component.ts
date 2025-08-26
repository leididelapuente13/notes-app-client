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
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '@features/notes/interfaces/Note.interface';

@Component({
  selector: 'notes-note-item',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './note-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteItemComponent implements OnInit {
  private readonly route = inject(Router);
  private readonly activeRoute = inject(ActivatedRoute);

  readonly note = input.required<Note>();
  readonly path = input.required<
    'all' | 'archived' | 'tags' | 'search' | `/tags/${string}`
  >();
  protected readonly selectedNote = signal<string | null>(null);
  protected readonly isSelected = computed(() => {
    if (!this.selectedNote()) return false;
    return this.selectedNote() === this.note().id;
  });

  protected navigateToNoteDetails() {
    this.route.navigate([`/notes/${this.path()}`, this.note().id]);
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params) => {
      this.selectedNote.set(params.get('id'));
    });
  }
}
