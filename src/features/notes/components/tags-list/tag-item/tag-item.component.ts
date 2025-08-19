import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import {RouterLink } from '@angular/router';
import { TagsStateService } from '@core/services/tags-state.service';
import { IconTagComponent } from "@shared/components";

@Component({
  selector: 'notes-tag-item',
  imports: [TitleCasePipe, IconTagComponent, RouterLink],
  templateUrl: './tag-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagItemComponent {
  private readonly tagsState = inject(TagsStateService);

  readonly tag = input.required<string>();

  protected readonly isSelected = computed(() => {
    const selectedTag = this.tagsState.selectedTag();
    const currentTag = this.tag();

    return selectedTag === currentTag;
  });

  protected readonly handleTagClick = (): void => {
    this.tagsState.navigateToTag(this.tag());
  };
}
