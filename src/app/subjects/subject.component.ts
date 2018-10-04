import { Component, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  @Input()
  introduction: string;

  @Input()
  previous: { route: string; text: string } = { route: undefined, text: '' };

  @Input()
  next: { route: string; text: string } = { route: undefined, text: '' };

  @Input()
  chapters: any[] = [];
}
