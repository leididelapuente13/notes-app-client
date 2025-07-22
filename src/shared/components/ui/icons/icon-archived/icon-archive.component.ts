import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-archived',
  imports: [],
  templateUrl: './icon-archive.component.html',
})
export class IconArchiveComponent {
  active = input<boolean>(false);
}
