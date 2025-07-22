import { Component } from '@angular/core';
import { LogoComponent } from '../../ui/logo/logo.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-sidebar',
  imports: [LogoComponent, NavComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
