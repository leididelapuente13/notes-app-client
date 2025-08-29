import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { IconPlusComponent } from '@shared/components';
import { filter } from 'rxjs';

@Component({
  selector: 'notes-add-note-button',
  imports: [IconPlusComponent, RouterLink],
  templateUrl: './add-note-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNoteButtonComponent implements OnInit {
  private readonly router = inject(Router);

  protected readonly isFormPage = signal<boolean>(false);

  ngOnInit(): void {
    this.isFormPage.set(this.router.url.includes('/notes/form'));
    
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isFormPage.set(event.url.includes('/notes/form'));
      });
  }
}
