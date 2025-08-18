import { Injectable, signal } from '@angular/core';
import { Toast } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  readonly visible = signal<boolean>(false);
  private readonly toast: Toast = {};

  toggle = () => {
    this.visible.update((visible) => !visible);
  };

  initiateToastData = ({ message, variant, redirectTo }: Toast) => {
    this.toast.message = message;
    this.toast.variant = variant;
    this.toast.redirectTo = redirectTo;
    this.toggle();
  };

  get toastData() {
    return this.toast;
  }
}
