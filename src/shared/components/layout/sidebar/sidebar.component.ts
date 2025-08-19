import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../../ui/logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { TagsListComponent } from '@features/notes/components/tags-list/tags-list.component';

@Component({
  selector: 'app-sidebar',
  imports: [LogoComponent, NavComponent, TagsListComponent],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
