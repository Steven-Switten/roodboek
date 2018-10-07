import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-b-duurzame-economie',
  templateUrl: './ii-b-duurzame-economie.component.html'
})
export class IIBDuurzameEconomieComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Het politieke kader', route: '/E' };
  previous = { text: 'Economische democratie', route: '/C' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Inleiding: voor een integrale boekhouding';

    const chapter2 = new Chapter();
    chapter2.title =
      '2. Een duurzame economie is een rationeel geplande economie';

    const chapter3 = new Chapter();
    chapter3.title = '3. Emissiehandel: de oplossing is niet meer markt';

    const chapter4 = new Chapter();
    chapter4.title =
      '4. Onthouding: als iedereen zijn steentje bijdraagt komen we er wel?';

    const chapter5 = new Chapter();
    chapter5.title =
      '5. Anti-industrialisme, zero growth of economische planning?';

    const chapter6 = new Chapter();
    chapter6.title = '6. De vervuiling van onze voeding';

    const chapter7 = new Chapter();
    chapter7.title =
      '7. Oplossingen: een duurzame economie is een democratische economie';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
    this.chapters.push(chapter5);
    this.chapters.push(chapter6);
    this.chapters.push(chapter7);
  }
}
