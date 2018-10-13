import {
  Component,
  Input,
  TemplateRef,
  ContentChildren,
  AfterContentInit,
  ViewEncapsulation
} from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TemplateDirective } from '../directives/template.directive';
import { getTemplateByName } from '../directives/template.helper';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubjectComponent implements AfterContentInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faHome = faHome;

  @Input()
  previous: { route: string; text: string } = { route: undefined, text: '' };

  @Input()
  next: { route: string; text: string } = { route: undefined, text: '' };

  @Input()
  chapters: any[] = [];

  introductionTemplate: TemplateRef<any>;

  chapterTemplates = {};

  @ContentChildren(TemplateDirective)
  templates: any;

  ngAfterContentInit(): void {
    this.chapters.forEach(element => {
      this.chapterTemplates[element.title] = getTemplateByName(
        this.templates,
        element.title
      );
    });
    this.introductionTemplate = getTemplateByName(
      this.templates,
      'introduction'
    );
  }
}
