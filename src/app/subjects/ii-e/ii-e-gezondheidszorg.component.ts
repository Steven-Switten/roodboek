import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-e-gezondheidszorg',
  templateUrl: './ii-e-gezondheidszorg.component.html'
})
export class IIEGezondheidszorgComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'De vergrijzing en de pensioenen', route: '/H' };
  previous = { text: 'Fiscaliteit: haal het geld waar het zit', route: '/F' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Gratis geneeskunde voor iedereen';

    const chapter2 = new Chapter();
    chapter2.title = '2. De farmaceutische industrie';

    const chapter3 = new Chapter();
    chapter3.title = '3. Ziekte en stress';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
  }
}
