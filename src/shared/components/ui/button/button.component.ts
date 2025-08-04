import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  label = input.required<string>();
  onClick = input.required<() => void>();

  clickHandler(){
    const click = this.onClick();
    click();
  }
}
