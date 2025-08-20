import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TagItemComponent } from './tag-item/tag-item.component';

@Component({
  selector: 'notes-tags-list',
  imports: [TagItemComponent],
  templateUrl: './tags-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsListComponent {
  readonly tags = input<string[]>([]);
}
