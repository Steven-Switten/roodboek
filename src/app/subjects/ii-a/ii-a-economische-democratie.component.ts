import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-a-economische-democratie',
  templateUrl: './ii-a-economische-democratie.component.html'
})
export class IIAEconomischeDemocratieComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'De duurzame economie', route: '/D' };
  previous = { text: 'Het Socialistisch alternatief', route: '/B' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title =
      '1. Een alternatief voor de crisis: Arbeidsduurvermindering!';

    const chapter2 = new Chapter();
    chapter2.title = '2. Gemeenschapsbezit: voor een openbare bank';

    const chapter3 = new Chapter();
    chapter3.title = '3. Werknemerscontrole en zelfbeheer';

    const chapter4 = new Chapter();
    chapter4.title = '4. Democratische planning';
    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
  }
}
