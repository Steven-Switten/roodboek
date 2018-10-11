import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-i-b-socialistisch-alternatief',
  templateUrl: './i-b-socialistisch-alternatief.component.html'
})
export class IBSocialistischAlternatiefComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Economische Democratie', route: '/C' };
  previous = { text: 'Socialist in een kapitalistische wereld', route: '/A' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Nationalisatie van sleutelsectoren';

    const chapter2 = new Chapter();
    chapter2.title = '2. Gelijkheid';

    const chapter3 = new Chapter();
    chapter3.title = '3. Zelfbeheer';

    const chapter4 = new Chapter();
    chapter4.title = '4. Secularisme';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
  }
}
