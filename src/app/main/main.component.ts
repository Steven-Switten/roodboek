import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';

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
  faMoneyBillWave = faMoneyBillWave;
  faUserGraduate = faUserGraduate;
  faHeartbeat = faHeartbeat;
  faHandHoldingHeart = faHandHoldingHeart;
  faLeaf = faLeaf;
  faGlobeAfrica = faGlobeAfrica;
  faHome = faHome;
  faUniversity = faUniversity;
  faBuilding = faBuilding;
  faUsers = faUsers;
  faHandshake = faHandshake;
  faBrain = faBrain;

  tiles: any[] = [];

  constructor(private router: Router) {
    this.tiles.push({
      text: 'Kritiek op het kapitalisme',
      color: '#2b7191',
      icon: faBuilding,
      link: 'A'
    });
    this.tiles.push({
      text: 'Het Socialistisch alternatief',
      color: '#a23578',
      icon: faUsers
    });
    this.tiles.push({
      text: 'Economische democratie',
      color: '#f01f4d',
      icon: faHandshake
    });
    this.tiles.push({
      text: 'De duurzame economie',
      color: '#b8d277',
      icon: faLeaf
    });
    this.tiles.push({
      text: 'Het politieke kader',
      color: '#fc9260',
      icon: faUniversity
    });
    this.tiles.push({
      text: 'Fiscaliteit: haal het geld waar het zit',
      color: '#88aa55',
      icon: faMoneyBillWave
    });
    this.tiles.push({
      text: 'De gezondheidszorg',
      color: '#2b7191',
      icon: faHeartbeat
    });
    this.tiles.push({
      text: 'De vergrijzing en de pensioenen',
      color: '#e959a3',
      icon: faHandHoldingHeart
    });
    this.tiles.push({
      text: 'Onderwijs',
      color: '#50d0de',
      icon: faUserGraduate
    });
    this.tiles.push({
      text: 'Internationaal',
      color: '#1e7060',
      icon: faGlobeAfrica
    });
    this.tiles.push({ text: 'Strategie', color: '#b369b1', icon: faBrain });
    this.tiles.push({ text: 'De partij', color: '#ee3030', icon: faHome });
  }

  navigateToSubject(link: string) {
    this.router.navigate([link]);
  }

  ngOnInit() {}

  loremIpsum(): string {
    return `
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Nullam eget nisl. Integer tempor. Etiam dictum tincidunt diam. Sed convallis magna eu sem. In convallis. 

Nunc auctor. In dapibus augue non sapien. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Suspendisse sagittis ultrices augue. Aliquam erat volutpat. Aenean placerat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.

Curabitur bibendum justo non orci. Praesent in mauris eu tortor porttitor accumsan. Fusce wisi. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. `;
  }
}
