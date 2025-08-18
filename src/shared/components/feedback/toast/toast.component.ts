import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import {
  IconCloseComponent,
  IconCheckComponent,
} from '@shared/components/ui/icons';
import { ToastService } from '@core/services/toast.service';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [RouterLink, TitleCasePipe, IconCloseComponent, IconCheckComponent],
  templateUrl: './toast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  private readonly toastService = inject(ToastService);

  readonly duration = input<number>(4000);
  readonly toastData = computed(() => this.toastService.toastData);
  protected readonly visible = this.toastService.visible;

  protected readonly toastClasses = computed(() => {
    const baseClasses =
      'fixed bottom-22 right-4 z-50 w-[274px] md:w-[390px] rounded-8 shadow-large flex items-center justify-between p-3 text-preset-6 border transition-all duration-500 ease-out bg-white/40 text-neutral-950 border-neutral-200 dark:bg-neutral-800/40 dark:text-white dark:border-neutral-700 lg:bottom-4';

    const visibilityClasses = this.visible()
      ? 'opacity-100 translate-y-0 scale-100'
      : 'opacity-0 translate-y-4 scale-95 pointer-events-none';

    return `${baseClasses} ${visibilityClasses}`;
  });

  constructor() {
    effect((onCleanup) => {
      if (!this.visible()) {
        return;
      }

      const timerId = setTimeout(() => {
        this.toastService.toggle();
      }, this.duration());

      onCleanup(() => clearTimeout(timerId));
    });
  }

  protected readonly handleClose = (): void => {
    this.toastService.toggle();
  };
}
