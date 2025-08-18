import { Injectable, signal } from '@angular/core';
import { Toast } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  readonly visible = signal<boolean>(false);
  private readonly toast = signal<Toast>({});

  toggle = () => {
    this.visible.update((visible) => !visible);
  };

  initiateToastData = (data: Toast) => {
    this.toast.set(data)
    this.toggle();
  };

  toastData() {
    return this.toast();
  }
}
