import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-archived',
  imports: [],
  templateUrl: './icon-archive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArchiveComponent {
  active = input<boolean>(false);
  lightThemeColor = input<'light' | 'dark'>('dark');
}
