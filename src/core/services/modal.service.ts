import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible = signal<boolean>(true);

  toggleModal() {
    this.isVisible.update((visible) => !visible);
  }
}
