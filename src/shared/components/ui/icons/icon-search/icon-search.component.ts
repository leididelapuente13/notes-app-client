import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-search',
  imports: [],
  templateUrl: './icon-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSearchComponent {
  active = input<boolean>(false);
}
