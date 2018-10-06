import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';
import { MainComponent } from './main/main.component';
import { IAKapitalismeComponent } from './subjects/i-a-kapitalisme/i-a-kapitalisme.component';
import { SubjectComponent } from './subjects/subject.component';
import { TemplateDirective } from './directives/template.directive';
import { GelijkheidComponent } from './subjects/i-b-socialistisch-alternatief/gelijkheid.component';
import { NationalisatieComponent } from './subjects/i-b-socialistisch-alternatief/nationalisatie.component';
import { InleidingBComponent } from './subjects/i-b-socialistisch-alternatief/inleiding-b.component';
import { IBSocialistischAlternatiefComponent } from './subjects/i-b-socialistisch-alternatief/i-b-socialistisch-alternatief.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'A',
    component: IAKapitalismeComponent
  },
  {
    path: 'B',
    component: IBSocialistischAlternatiefComponent
  },

  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ScrollViewComponent,
    MainComponent,
    SubjectComponent,
    TemplateDirective,
    // A
    IAKapitalismeComponent,
    // B
    IBSocialistischAlternatiefComponent,
    InleidingBComponent,
    GelijkheidComponent,
    NationalisatieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    // material
    MatExpansionModule,
    MatCardModule,
    MatTooltipModule,
    // other imports here
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
