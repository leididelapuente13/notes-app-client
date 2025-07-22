import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/shared/components/layout/header/header.component';
import { SidebarComponent } from 'src/shared/components/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-notes-layout',
  imports: [HeaderComponent, RouterOutlet, SidebarComponent],
  templateUrl: './notes-layout.component.html',
})
export class NotesLayoutComponent {}
