import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-c-politieke-kader',
  templateUrl: './ii-c-politieke-kader.component.html'
})
export class IICPolitiekeKaderComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Fiscaliteit: haal het geld waar het zit', route: '/F' };
  previous = { text: 'De duurzame economie', route: '/D' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. De structuren';

    const chapter2 = new Chapter();
    chapter2.title = '2. De mandatarissen';

    const chapter3 = new Chapter();
    chapter3.title = '3. De pers';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
  }
}
