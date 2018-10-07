import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-d-fiscaliteit',
  templateUrl: './ii-d-fiscaliteit.component.html'
})
export class IIDFiscaliteitComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'De gezondheidszorg', route: '/G' };
  previous = { text: 'Het politieke kader', route: '/E' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Fiscale fraude';

    const chapter2 = new Chapter();
    chapter2.title = '2. Een taxshift van burgers en kmo’s naar de vermogens';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);

    console.log(this.chapters);
  }
}
