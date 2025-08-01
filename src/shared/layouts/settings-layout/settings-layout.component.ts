import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavigationComponent, HeaderComponent, SidebarComponent } from "@shared/components";

@Component({
  selector: 'app-settings-layout',
  imports: [BottomNavigationComponent, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './settings-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsLayoutComponent { }
