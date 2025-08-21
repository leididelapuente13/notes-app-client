import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { ButtonComponent } from '@shared/components';
import { Note } from '@features/notes/interfaces/Note.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'notes-sidebar',
  imports: [NotesListComponent, ButtonComponent],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly router = inject(Router);
  readonly notes = input<Note[]>([]);
  readonly navigateToForm = signal<boolean>(false);

  protected readonly navigate = () => {
    if (this.navigateToForm()) {
      this.router.navigate(['/notes/new']);
      this.navigateToForm.set(false);
    }
  };
}
