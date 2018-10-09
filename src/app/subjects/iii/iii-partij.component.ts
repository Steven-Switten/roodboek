import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-iii-partij',
  templateUrl: './iii-partij.component.html'
})
export class IIIPartijComponent implements OnInit {
  chapters: any[] = [];

  previous = { text: 'Misdaad en Straf', route: '/K' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. De regeringsdeelname';

    const chapter2 = new Chapter();
    chapter2.title = '2. Het progressief front';

    const chapter3 = new Chapter();
    chapter3.title = '3. Niet enkel politiek';

    const chapter4 = new Chapter();
    chapter4.title = '4. De partij een leerschool in zelfbeheer';

    const chapter5 = new Chapter();
    chapter5.title = '5. Wat moet er veranderen in de partij';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
    this.chapters.push(chapter5);
  }
}
