import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BottomNavigationComponent,
  HeaderComponent,
  SidebarComponent,
} from '@shared/components';
import { AddNoteButtonComponent } from '@features/notes/components/add-note-button/add-note-button.component';
import { FontService } from '@features/settings/services/font.service';

@Component({
  selector: 'app-notes-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent,
    BottomNavigationComponent,
    AddNoteButtonComponent,
  ],
  templateUrl: './notes-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesLayoutComponent {
  private readonly fontService = inject(FontService);

  protected readonly getFontClass = computed(() => {
    switch (this.fontService.font()) {
      case 'mono':
        return 'font-mono';
      case 'sans':
        return 'font-sans';
      case 'serif':
        return 'font-serif';
    }
  });
}
