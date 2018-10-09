import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-f-pensioenen',
  templateUrl: './ii-f-pensioenen.component.html'
})
export class IIFPensioenenComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Onderwijs', route: '/I' };
  previous = { text: 'De gezondheidszorg', route: '/G' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1.Wettelijk eenheidspensioen op 65';

    const chapter2 = new Chapter();
    chapter2.title = '2.Betaalbaarheid van de pensioenen';

    const chapter3 = new Chapter();
    chapter3.title = '3. De vergrijzing is van voorbijgaande aard';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
  }
}
