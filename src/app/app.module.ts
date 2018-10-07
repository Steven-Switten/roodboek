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
import { SubjectComponent } from './subjects/subject.component';
import { TemplateDirective } from './directives/template.directive';

import { IAKapitalismeComponent } from './subjects/i-a-kapitalisme/i-a-kapitalisme.component';
import { GelijkheidComponent } from './subjects/i-b-socialistisch-alternatief/gelijkheid.component';
import { NationalisatieComponent } from './subjects/i-b-socialistisch-alternatief/nationalisatie.component';
import { InleidingBComponent } from './subjects/i-b-socialistisch-alternatief/inleiding-b.component';
import { IBSocialistischAlternatiefComponent } from './subjects/i-b-socialistisch-alternatief/i-b-socialistisch-alternatief.component';
import { GemeenschapsbezitComponent } from './subjects/ii-a/a-2-gemeenschapsbezit.component';
import { WerknemerscontroleComponent } from './subjects/ii-a/a-3-werknemerscontrole.component';
import { AlternatiefComponent } from './subjects/ii-a/a-1-alternatief.component';
import { DemocratischePlanningComponent } from './subjects/ii-a/a-4-democratische-planning.component';
import { IIAEconomischeDemocratieComponent } from './subjects/ii-a/ii-a-economische-democratie.component';
import { IIBDuurzameEconomieComponent } from './subjects/ii-b/ii-b-duurzame-economie.component';
import { B1InleidingComponent } from './subjects/ii-b/b-1-inleiding.component';
import { B2DuurzameEconomieComponent } from './subjects/ii-b/b-2-duurzame-economie.component';
import { B3EmissiehandelComponent } from './subjects/ii-b/b-3-emissiehandel.component';
import { B4OnthoudingComponent } from './subjects/ii-b/b-4-onthouding.component';
import { B7OplossingenComponent } from './subjects/ii-b/b-7-oplossingen.component';
import { B5AntiIndustrialismeComponent } from './subjects/ii-b/b-5-anti-industrialisme.component';
import { B6VervuilingVanVoedingComponent } from './subjects/ii-b/b-6-vervuiling-van-voeding.component';
import { IICPolitiekeKaderComponent } from './subjects/ii-c/ii-c-politieke-kader.component';
import { C3PersComponent } from './subjects/ii-c/c-3-pers.component';
import { C1StructurenComponent } from './subjects/ii-c/c-1-structuren.component';
import { C2MandatarissenComponent } from './subjects/ii-c/c-2-mandatarissen.component';

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
  {
    path: 'C',
    component: IIAEconomischeDemocratieComponent
  },
  {
    path: 'D',
    component: IIBDuurzameEconomieComponent
  },
  {
    path: 'E',
    component: IICPolitiekeKaderComponent
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
    NationalisatieComponent,
    // C
    IIAEconomischeDemocratieComponent,
    AlternatiefComponent,
    GemeenschapsbezitComponent,
    WerknemerscontroleComponent,
    DemocratischePlanningComponent,
    // D
    IIBDuurzameEconomieComponent,
    B1InleidingComponent,
    B2DuurzameEconomieComponent,
    B3EmissiehandelComponent,
    B4OnthoudingComponent,
    B5AntiIndustrialismeComponent,
    B6VervuilingVanVoedingComponent,
    B7OplossingenComponent,
    // E
    IICPolitiekeKaderComponent,
    C1StructurenComponent,
    C2MandatarissenComponent,
    C3PersComponent
    // F
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
