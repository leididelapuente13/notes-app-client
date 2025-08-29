import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BottomNavigationComponent,
  HeaderComponent,
  SidebarComponent,
} from '@shared/components';
import { AddNoteButtonComponent } from '@features/notes/components/add-note-button/add-note-button.component';

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
export class NotesLayoutComponent {}
