import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-h-internationaal',
  templateUrl: './ii-h-internationaal.component.html'
})
export class IIHInternationaalComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Misdaad en straf', route: '/K' };
  previous = { text: 'Onderwijs', route: '/I' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Europa';

    const chapter2 = new Chapter();
    chapter2.title = '2. De Derde Wereld ontwikkelingssamenwerking';

    const chapter3 = new Chapter();
    chapter3.title = '3. Oorlog en Vrede';

    const chapter4 = new Chapter();
    chapter4.title = '4. Asiel en Migratie';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
  }
}
