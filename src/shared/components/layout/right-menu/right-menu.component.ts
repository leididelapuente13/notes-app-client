import {
  ChangeDetectionStrategy,
  Component,
  output,
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
  selector: 'app-right-menu',
  imports: [ButtonComponent],
  templateUrl: './right-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightMenuComponent {
  readonly clickedOption = output<RightMenuOptions>();

  protected readonly options: {
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

  protected handleOptionClicked(option: RightMenuOptions) {
    this.clickedOption.emit(option);
  }

  protected getClickHandler(option: RightMenuOptions) {
    return () => this.handleOptionClicked(option);
  }
}
