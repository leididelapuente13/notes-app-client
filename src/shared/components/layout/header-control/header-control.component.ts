import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IconDeleteComponent,
  IconArchiveComponent,
} from '@shared/components/ui/icons';

@Component({
  selector: 'app-header-control',
  imports: [IconDeleteComponent, IconArchiveComponent],
  templateUrl: './header-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderControlComponent {}
