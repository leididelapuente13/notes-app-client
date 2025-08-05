import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Type,
} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgComponentOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  icon = input<Type<unknown>>();
  label = input.required<string>();
  variant = input.required<'primary' | 'secondary' | 'border' | 'danger'>();
  isDangerButton = input<boolean>(false);
  alignContent = input<'left' | 'center'>('center');
  disabled = input<boolean>(false);
  onClick = input.required<() => void>();

  activeClasses = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'border':
        return 'btn-border';
      case 'danger':
        return 'btn-danger';
      default:
        return 'btn-primary';
    }
  });

  disabledClasses = computed(() => {
    if (this.disabled() && this.variant() === 'primary') {
      return 'btn-primary-disabled';
    }
    return 'btn-disabled';
  });

  clickHandler() {
    if (this.disabled()) return;
    const click = this.onClick();
    click();
  }
}
