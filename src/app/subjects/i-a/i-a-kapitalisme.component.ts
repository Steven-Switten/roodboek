import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-i-a-kapitalisme',
  templateUrl: './i-a-kapitalisme.component.html'
})
export class IAKapitalismeComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Het Socialistisch alternatief', route: '/B' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Een wereldwijd toenemende kloof van arm en rijk';

    const chapter2 = new Chapter();
    chapter2.title =
      '2. De vrije markt... van de internationale monopolievorming';

    const chapter3 = new Chapter();
    chapter3.title = '3. De economische macht in België waar zit het geld';

    const chapter4 = new Chapter();
    chapter4.title = '4. Een transfer van werkenden naar rijken';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
  }
}
