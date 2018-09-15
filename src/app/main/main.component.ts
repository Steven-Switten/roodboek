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
  faChevronDown = faChevronDown;
  fragment: string;
  constructor() {}

  ngOnInit() {}
}
