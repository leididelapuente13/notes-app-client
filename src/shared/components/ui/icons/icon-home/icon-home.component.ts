import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-home',
  imports: [],
  templateUrl: './icon-home.component.html',
})
export class IconHomeComponent {
  active = input<boolean>(false);
}
