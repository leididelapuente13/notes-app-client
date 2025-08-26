import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '@core/services/title.service';

@Component({
  selector: 'app-title',
  imports: [TitleCasePipe],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly titleService = inject(TitleService);

  title = input.required<string>();
  match = input<string | undefined>(undefined);
}
