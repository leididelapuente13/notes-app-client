import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BottomNavigationComponent,
  HeaderComponent,
  SidebarComponent,
} from '@shared/components';

@Component({
  selector: 'app-notes-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent,
    BottomNavigationComponent,
  ],
  templateUrl: './notes-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesLayoutComponent {
}
