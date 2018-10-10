import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-ii-i-misdaad',
  templateUrl: './ii-i-misdaad.component.html'
})
export class IIMisdaadComponent implements OnInit {
  chapters: any[] = [];
  next = { text: 'Partij en Strategie', route: '/L' };
  previous = { text: 'Internationaal', route: '/J' };

  constructor() {}

  ngOnInit(): void {
    const chapter1 = new Chapter();
    chapter1.title = '1. Veilige gemeenschappen';

    const chapter2 = new Chapter();
    chapter2.title = '2. Justitie';

    const chapter3 = new Chapter();
    chapter3.title = '3. Schuld en boete';

    const chapter4 = new Chapter();
    chapter4.title = '4. De afkoopwet, een sterk staaltje klassenjustitie';

    const chapter5 = new Chapter();
    chapter5.title = '5. Het gevangeniswezen: naar een restoratieve justitie';

    const chapter6 = new Chapter();
    chapter6.title = '6. Progressieve arbeidswetgeving';

    const chapter7 = new Chapter();
    chapter7.title = '7. De scheiding der machten';

    const chapter8 = new Chapter();
    chapter8.title = '8. Besluit';

    this.chapters.push(chapter1);
    this.chapters.push(chapter2);
    this.chapters.push(chapter3);
    this.chapters.push(chapter4);
    this.chapters.push(chapter5);
    this.chapters.push(chapter6);
    this.chapters.push(chapter7);
    this.chapters.push(chapter8);
  }
}
