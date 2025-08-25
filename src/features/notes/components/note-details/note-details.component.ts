import { DatePipe, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '@features/notes/interfaces/Note.interface';
import {
  IconTagComponent,
  IconClockComponent,
  SectionTitleComponent,
} from '@shared/components';
import { NotesFormComponent } from '../notes-form/notes-form.component';
import { HeaderControlOptions } from '@shared/interfaces';
import { HeaderControlComponent } from '../header-control/header-control.component';

@Component({
  selector: 'notes-note-details',
  imports: [
    DatePipe,
    TitleCasePipe,
    IconTagComponent,
    IconClockComponent,
    HeaderControlComponent,
    SectionTitleComponent,
    NotesFormComponent,
  ],
  templateUrl: './note-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteDetailsComponent {
  private readonly activeRoute = inject(ActivatedRoute);

  readonly headerControlOptions = input.required<HeaderControlOptions[]>();

  readonly formReset = signal<boolean>(false);
  readonly headerControlOptionClicked = signal<HeaderControlOptions | null>(
    null,
  );
  protected readonly formVisible = signal<boolean>(false);
  protected readonly exampleNote = signal<Note>({
    id: '2',
    title: 'Angular Signals',
    tags: ['angular', 'signals'],
    updatedAt: new Date('2024-06-02T09:30:00Z'),
    content: 'Exploring the new signals API in Angular 20.',
    archived: false,
  });

  protected noteIdParam = signal<string | undefined>(
    this.activeRoute.snapshot.paramMap.get('id') ?? undefined,
  );

  protected showForm() {
    this.formVisible.set(true);
  }

  private readonly resetFormOnRouteChange = effect(() => {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      const newNoteId = paramMap.get('id') ?? undefined;
      this.noteIdParam.set(newNoteId);
      this.formVisible.set(false);
    });
  });
}
