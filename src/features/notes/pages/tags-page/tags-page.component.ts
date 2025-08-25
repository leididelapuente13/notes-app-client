import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagsListComponent } from '@features/notes/components/tags-list/tags-list.component';
import { SectionTitleComponent } from '@shared/components';

@Component({
  selector: 'notes-tags-page',
  imports: [TagsListComponent, SectionTitleComponent],
  templateUrl: './tags-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TagsPageComponent {}
export default TagsPageComponent;
