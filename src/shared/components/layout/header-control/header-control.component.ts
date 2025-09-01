import { Location, NgComponentOutlet, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal,
  Type,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  IconDeleteComponent,
  IconArchiveComponent,
  IconArrowLeftComponent,
  IconRefreshComponent,
} from '@shared/components/ui/icons';
import { HeaderControlOptions } from '@shared/interfaces';

@Component({
  selector: 'app-header-control',
  imports: [NgComponentOutlet, TitleCasePipe, IconArrowLeftComponent],
  templateUrl: './header-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderControlComponent {
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  readonly options = input<HeaderControlOptions[]>();
  readonly cancelOption = input<'navigate-back' | 'reset-form' | undefined>(
    undefined,
  );
  readonly navigateTo = input<
    'back' | '/notes/all' | '/notes/tags' | '/settings'
  >('back');
  readonly navigationButtonLabel = input<'all tags' | 'go back' | 'settings'>(
    'go back',
  );
  readonly borderBottom = input<boolean>(true);

  readonly formReset = output<boolean>();
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

  protected handleNavigation() {
    if (this.navigateTo() === 'back') {
      this.goBack();
      return;
    }
    this.router.navigate([this.navigateTo()]);
  }

  protected readonly handleCancel = () => {
    switch (this.cancelOption()) {
      case 'navigate-back':
        this.goBack();
        break;
      case 'reset-form':
        this.formReset.emit(true);
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
