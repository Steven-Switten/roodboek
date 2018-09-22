import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Chapter {
  title: string;
  innerHtml: string;
}

@Component({
  selector: 'app-i-a-kapitalisme',
  templateUrl: './i-a-kapitalisme.component.html'
})
export class IAKapitalismeComponent implements OnInit {
  inleiding: string;
  iAinleiding: string;

  chapters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`assets/I/A/inleiding.html`, { responseType: 'text' })
      .subscribe(result => {
        this.iAinleiding = result;
      });

    this.http
      .get(`assets/I/A/1-kloof.html`, { responseType: 'text' })
      .subscribe((result: string) => {
        const chapter = new Chapter();
        chapter.title = '1. Een wereldwijd toenemende kloof van arm en rijk';
        chapter.innerHtml = result;
        this.chapters[0] = chapter;
      });

    this.http
      .get(`assets/I/A/2-vrijemarkt.html`, { responseType: 'text' })
      .subscribe(result => {
        const chapter = new Chapter();
        chapter.title =
          '2. De vrije markt... van de internationale monopolievorming';
        chapter.innerHtml = result;
        this.chapters[1] = chapter;
      });

    this.http
      .get(`assets/I/A/3-economisch.html`, { responseType: 'text' })
      .subscribe(result => {
        const chapter = new Chapter();
        chapter.title = '3. De economische macht in België: waar zit het geld?';
        chapter.innerHtml = result;
        this.chapters[2] = chapter;
      });

    this.http
      .get(`assets/I/A/4-transfer.html`, { responseType: 'text' })
      .subscribe(result => {
        const chapter = new Chapter();
        chapter.title = '4. Een transfer van werkenden naar rijken';
        chapter.innerHtml = result;
        this.chapters[3] = chapter;
      });
  }
}
