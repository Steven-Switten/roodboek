import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  topTitle = 'Waarvoor wij staan';
  mainTitle = 'Ons Roodboek';
  subTitle = 'Naar links en dan vooruit!';
  bottomTitle = 'Ons Roodboek voor een betere en eerlijkere maatschappij';
  bottomText = this.loremIpsum();

  faChevronDown = faChevronDown;
  fragment: string;
  tiles: any[] = [];
  constructor() {
    this.tiles.push({ text: 'Hoofdstuk 1', color: 'blue' });
    this.tiles.push({ text: 'Hoofdstuk 2', color: 'red' });
    this.tiles.push({ text: 'Hoofdstuk 3', color: 'green' });
    this.tiles.push({ text: 'Hoofdstuk 4', color: 'yellow' });
    this.tiles.push({ text: 'Hoofdstuk 5', color: 'brown' });
    this.tiles.push({ text: 'Hoofdstuk 6', color: 'grey' });
    this.tiles.push({ text: 'Hoofdstuk 7', color: 'orange' });
    this.tiles.push({ text: 'Hoofdstuk 8', color: 'pink' });
    this.tiles.push({ text: 'Hoofdstuk 9', color: 'teal' });
    this.tiles.push({ text: 'Hoofdstuk 10', color: 'purple' });
    this.tiles.push({ text: 'Hoofdstuk 11', color: 'red' });
    this.tiles.push({ text: 'Hoofdstuk 12', color: 'green' });
  }

  ngOnInit() {}

  loremIpsum(): string {
    return `
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Nullam eget nisl. Integer tempor. Etiam dictum tincidunt diam. Sed convallis magna eu sem. In convallis. 

Nunc auctor. In dapibus augue non sapien. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Suspendisse sagittis ultrices augue. Aliquam erat volutpat. Aenean placerat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.

Curabitur bibendum justo non orci. Praesent in mauris eu tortor porttitor accumsan. Fusce wisi. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. `;
  }
}
