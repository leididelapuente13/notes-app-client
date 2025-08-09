import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { IconArchiveComponent, IconDeleteComponent } from '../icons';
import { ModalConfig, ModalVariants } from '@shared/interfaces';
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
  readonly variant = input.required<ModalVariants>();
  readonly onConfirm = input.required<() => void>();

  private readonly _modalConfigMap: Record<ModalVariants, ModalConfig> = {
    archive: {
      icon: IconArchiveComponent,
      buttonLabel: 'Archive Note',
      variant: 'primary',
      title: 'Archive Note',
      description:
        'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.',
    },
    delete: {
      icon: IconDeleteComponent,
      buttonLabel: 'Delete Note',
      variant: 'danger',
      title: 'Delete Note',
      description:
        'Are you sure you want to permanently delete this note? This action cannot be undone.',
    },
  };

  private readonly modalConfigMap = computed(
    () => this._modalConfigMap[this.variant()],
  );

  protected readonly iconComponent = computed(() => this.modalConfigMap().icon);

  protected readonly buttonLabel = computed(
    () => this.modalConfigMap().buttonLabel,
  );

  protected readonly buttonVariant = computed(
    () => this.modalConfigMap().variant,
  );

  protected readonly modalTitle = computed(() => this.modalConfigMap().title);

  protected readonly modalDescription = computed(
    () => this.modalConfigMap().description,
  );

  protected onCancel = () => {
    this.modalService.toggleModal();
  };
}
