import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontService } from '@features/settings/services/font.service';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  private readonly fontService = inject(FontService);

  protected readonly fontClass = computed(() =>
    this.fontService.getFontClass(this.fontService.font()),
  );
}
