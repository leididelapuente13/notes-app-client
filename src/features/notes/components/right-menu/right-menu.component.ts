import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
  Type,
} from '@angular/core';
import {
  IconArchiveComponent,
  IconDeleteComponent,
  IconRefreshComponent,
} from '@shared/components/ui/icons';
import { RightMenuOptions } from '@shared/interfaces';
import { ButtonComponent } from '@shared/components/ui';

@Component({
  selector: 'notes-right-menu',
  imports: [ButtonComponent],
  templateUrl: './right-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightMenuComponent {
  readonly optionsToDisplay = input<RightMenuOptions[]>();
  readonly clickedOption = signal<RightMenuOptions | null>(null);

  private readonly optionsMap: {
    label: string;
    icon: Type<unknown>;
    key: RightMenuOptions;
  }[] = [
    {
      label: 'Archive Note',
      icon: IconArchiveComponent,
      key: 'archive',
    },
    {
      label: 'Delete Note',
      icon: IconDeleteComponent,
      key: 'delete',
    },
    {
      label: 'Restore Note',
      icon: IconRefreshComponent,
      key: 'restore',
    },
  ];

  protected readonly options = computed(() => {
    const toDisplay = this.optionsToDisplay();
    return this.optionsMap.filter((option) => toDisplay?.includes(option.key));
  });

  protected handleClickedOption(clicked: boolean, option: RightMenuOptions) {
    if (clicked) {
      this.clickedOption.set(option);
    }
  }
}
