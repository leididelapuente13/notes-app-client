import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Type,
} from '@angular/core';
import { IconArchiveComponent } from '../icons';
import { icons } from '@shared/interfaces';
import { ButtonComponent } from '../button/button.component';
import { ModalService } from '@core/services/modal.service';

@Component({
  selector: 'app-modal',
  imports: [NgComponentOutlet, ButtonComponent],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  private readonly modalService = inject(ModalService);
  readonly visible = computed(() => this.modalService.isVisible());
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly iconName = input.required<icons>();
  private readonly iconMap = new Map<string, Type<unknown>>([
    ['archive', IconArchiveComponent],
    ['delete', IconArchiveComponent],
  ]);

  protected getIcon(key: icons): Type<unknown> | null {
    return this.iconMap.get(key) ?? null;
  }

  protected onCancel = () => {
    this.modalService.toggleModal();
  };
}
