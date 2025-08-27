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
  private readonly router = inject(Router);
  private readonly activeRoute = inject(ActivatedRoute);

  readonly isFirstNote = input<boolean>(false);
  readonly note = input.required<Note>();
  readonly path = input.required<
    | 'all'
    | 'archived'
    | 'tags'
    | 'search'
    | `/tags/${string}`
    | `/search/${string}`
  >();
  protected readonly selectedNote = signal<string | null>(null);
  private readonly isLargeScreen = signal<boolean>(false);
  protected readonly isSelected = computed(() => {
    if (!this.selectedNote()) return false;
    return this.selectedNote() === this.note().id;
  });
  private readonly isFormRoute = computed(() => {
    return this.router.url.includes('/form');
  });

  protected navigateToNoteDetails() {
    this.router.navigate([`/notes/${this.path()}`, this.note().id]);
  }

  protected checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isLargeScreen.set(screenWidth >= 992);

    if (this.isFirstNote() && this.isLargeScreen() && !this.isFormRoute()) {
      this.navigateToNoteDetails();
    }
  }

  ngOnInit() {
    this.checkScreenSize();
    this.activeRoute.paramMap.subscribe((params) => {
      this.selectedNote.set(params.get('id'));
    });
  }
}
