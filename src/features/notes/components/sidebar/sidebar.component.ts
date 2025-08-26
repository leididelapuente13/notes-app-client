import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { ButtonComponent, MessageComponent } from '@shared/components';
import { Note } from '@features/notes/interfaces/Note.interface';
import { Router } from '@angular/router';
import { TitleService } from '@core/services/title.service';

@Component({
  selector: 'notes-sidebar',
  imports: [NotesListComponent, ButtonComponent, MessageComponent],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly router = inject(Router);
  private readonly titleService = inject(TitleService);

  readonly notes = input<Note[]>([]);
  readonly notesRedirectionPath = input.required<
    'all' | 'archived' | 'tags' | 'search' | `/tags/${string}`
  >();
  readonly navigateToForm = signal<boolean>(false);

  protected readonly navigate = () => {
    if (this.navigateToForm()) {
      this.router.navigate(['/notes/new']);
      this.navigateToForm.set(false);
    }
  };

  protected readonly matchValue = computed(
    () => this.titleService.getValues().match,
  );
}
