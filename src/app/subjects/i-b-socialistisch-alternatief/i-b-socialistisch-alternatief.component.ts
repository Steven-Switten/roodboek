import { Component, OnInit } from '@angular/core';

class Chapter {
  title: string;
  innerHtml: string;
}

@Component({
  selector: 'app-i-b-socialistisch-alternatief',
  templateUrl: './i-b-socialistisch-alternatief.component.html'
})
export class IBSocialistischAlternatiefComponent implements OnInit {
  iAinleiding: string;

  chapters: any[] = [];
  next = { text: 'Economische Democratie', route: '/C' };
  previous = { text: 'Het Socialistisch alternatief', route: '/A' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Nationalisatie van sleutelsectoren';

    const chapter2 = new Chapter();
    chapter2.title = '2. Gelijkheid';

    // const chapter3 = new Chapter();
    // chapter3.title = '3. De economische macht in België: waar zit het geld?';

    // const chapter4 = new Chapter();
    // chapter4.title = '4. Een transfer van werkenden naar rijken';
    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    // this.chapters.push(chapter3);
    // this.chapters.push(chapter4);
  }
}