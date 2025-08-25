import { DOCUMENT, NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
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
  document = inject(DOCUMENT);

  icon = input<Type<unknown>>();
  label = input.required<string>();
  variant = input.required<'primary' | 'secondary' | 'border' | 'danger'>();
  isDangerButton = input<boolean>(false);
  alignContent = input<'left' | 'center'>('center');
  disabled = input<boolean>(false);
  clicked = output<boolean>();

  protected readonly isDarkMode = computed(() =>
    this.document.body.classList.contains('dark'),
  );

  activeClasses = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return this.isDarkMode() ? 'btn-secondary-dark' : 'btn-secondary-light';
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
    this.clicked.emit(true);
  }

  readonly iconColor = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return {
          lightVariant: 'white',
          darkVariant: 'white',
        };
      case 'secondary':
        return this.isDarkMode()
          ? {
              lightVariant: 'white',
              darkVariant: 'white',
            }
          : {
              lightVariant: 'black',
              darkVariant: 'white',
            };
      case 'border':
        return {
          lightVariant: 'black',
          darkVariant: 'white',
        };
      case 'danger':
        return {
          lightVariant: 'white',
          darkVariant: 'white',
        };
      default:
        return {
          lightVariant: 'white',
          darkVariant: 'white',
        };
    }
  });
}
