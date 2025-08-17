import { Location, NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal,
  Type,
} from '@angular/core';
import {
  IconDeleteComponent,
  IconArchiveComponent,
  IconArrowLeftComponent,
  IconRefreshComponent,
} from '@shared/components/ui/icons';
import { HeaderControlOptions } from '@shared/interfaces';

@Component({
  selector: 'app-header-control',
  imports: [NgComponentOutlet, IconArrowLeftComponent],
  templateUrl: './header-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderControlComponent {
  protected readonly location = inject(Location);

  readonly options = input<HeaderControlOptions[]>();
  readonly cancelOptions = input<'navigate-back' | 'reset-form'>(
    'navigate-back',
  );

  readonly formReset = output<void>();
  readonly optionClicked = output<HeaderControlOptions>();

  protected readonly iconMap = signal(
    new Map<HeaderControlOptions, Type<unknown>>([
      ['archive', IconArchiveComponent],
      ['delete', IconDeleteComponent],
      ['restore', IconRefreshComponent],
    ]),
  );

  protected getIcon(name: HeaderControlOptions): Type<unknown> | null {
    return this.iconMap().get(name) ?? null;
  }

  protected goBack() {
    this.location.back();
  }

  protected readonly handleCancel = () => {
    switch (this.cancelOptions()) {
      case 'navigate-back':
        this.goBack();
        break;
      case 'reset-form':
        this.formReset.emit();
        break;
    }
  };

  protected hasSavingOption(): boolean {
    return this.options()?.includes('save') ?? false;
  }

  protected readonly handleOptionClick = (option: HeaderControlOptions) => {
    this.optionClicked.emit(option);
  };
}
