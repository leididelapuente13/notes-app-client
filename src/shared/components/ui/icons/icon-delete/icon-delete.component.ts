import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-delete',
  imports: [],
  templateUrl: './icon-delete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDeleteComponent {
  color = input<'white'>('white');
}
