import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-g-onderwijs',
  templateUrl: './ii-g-onderwijs.component.html'
})
export class IIGOnderwijsComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Internationaal', route: '/J' };
  previous = { text: 'De vergrijzing en de pensioenen', route: '/H' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Onderwijs in België: goed, maar niet voor iedereen';

    const chapter2 = new Chapter();
    chapter2.title =
      '2. Angelsaksisch model: de American Dream nastreven in een wereld die sterk is veranderd';

    const chapter3 = new Chapter();
    chapter3.title =
      '3. Het Fins model: beginnen bij het basisonderwijs om tot gelijkheid te komen';

    const chapter4 = new Chapter();
    chapter4.title = '4. Motivatie, creativiteit en technologie';

    const chapter5 = new Chapter();
    chapter5.title = '5. Wat met het (hoger) secundair onderwijs?';

    const chapter6 = new Chapter();
    chapter6.title = '6. Voorstellen';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
    this.chapters.push(chapter5);
    this.chapters.push(chapter6);
  }
}
