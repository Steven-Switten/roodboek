import { Directive, Input, TemplateRef } from '@angular/core';

/*
  Template directive to handle multislot in application

  <-component>
    <ng-template appTemplate="header">
      This is the header
    </ng-template>
    <ng-template appTemplate="content" let-item>
      ...
    </ng-template>
  </-component>

  Properties:
  - appTemplate: string // key to identify the template
 */

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective {
  constructor(public template: TemplateRef<any>) {}
  @Input()
  appTemplate: string;

  getName() {
    return this.appTemplate;
  }
}
