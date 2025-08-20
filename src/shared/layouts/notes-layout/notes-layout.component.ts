import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  BottomNavigationComponent,
  HeaderComponent,
  SidebarComponent,
} from '@shared/components';
import { RightMenuComponent } from '@shared/components/layout/right-menu/right-menu.component';

@Component({
  selector: 'app-notes-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    SidebarComponent,
    BottomNavigationComponent,
    RightMenuComponent,
  ],
  templateUrl: './notes-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesLayoutComponent {}
