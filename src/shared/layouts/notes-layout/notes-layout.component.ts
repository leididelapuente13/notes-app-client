import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/shared/components/layout/header/header.component';

@Component({
  selector: 'app-notes-layout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './notes-layout.component.html',
})
export class NotesLayoutComponent {}
