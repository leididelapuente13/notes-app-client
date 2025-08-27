import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  output,
} from '@angular/core';
import { Router } from '@angular/router';
import { InputComponent } from '@shared/components/ui';

@Component({
  selector: 'app-search-bar',
  imports: [InputComponent],
  templateUrl: './search-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  private readonly router = inject(Router);
  protected readonly inputValue = output<string | null>();

  private readonly inputValueEffect = effect(() => {
    this.inputValue.subscribe((value) => {
      if (!value) return;
      this.router.navigate(['/notes/search', value]);
    });
  });
}
