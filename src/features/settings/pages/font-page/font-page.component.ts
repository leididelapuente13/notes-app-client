import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  HeadingComponent,
  SettingsSelectionComponent,
} from '@features/settings/components';
import { FontService } from '@features/settings/services/font.service';
import { Fonts } from '@features/settings/types';
import {
  ButtonComponent,
  IconFontMonoComponent,
  IconFontSansComponent,
  IconFontSerifComponent,
} from '@shared/components';
import { Selection } from '@shared/interfaces';

@Component({
  selector: 'app-font-page',
  imports: [HeadingComponent, SettingsSelectionComponent, ButtonComponent],
  templateUrl: './font-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FontPageComponent {
  fontSelectionComponent = new SettingsSelectionComponent<Fonts>();

  private readonly fontService = inject(FontService);

  protected readonly clickedUpdateFont = signal<boolean>(false);
  protected readonly currentFont = computed(() => this.fontService.getFont());
  protected readonly fontSelection = signal<Fonts>(this.currentFont());

  protected readonly selections: Selection<Fonts>[] = [
    {
      icon: IconFontSansComponent,
      title: 'Sans-serif',
      description: 'Clean and modern, easy to read.',
      value: 'sans',
    },
    {
      icon: IconFontSerifComponent,
      title: 'Serif',
      description: 'Classic and elegant for a timeless feel.',
      value: 'serif',
    },
    {
      icon: IconFontMonoComponent,
      title: 'Monospace',
      description: 'Code-like, great for a technical vibe.',
      value: 'mono',
    },
  ];

  private readonly updateFontEffect = effect(() => {
    if (this.clickedUpdateFont()) {
      this.updateFont();
      this.clickedUpdateFont.set(false);
    }
  });

  updateFontSelection = (value: Fonts | null) => {
    if (!value) return;
    this.fontSelection.set(value);
  };

  updateFont = () => {
    this.fontService.updateFont(this.fontSelection());
  };
}
