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

import { IAKapitalismeComponent } from './subjects/i-a/i-a-kapitalisme.component';
import { A1KloofComponent } from './subjects/i-a/a-1-kloof.component';
import { A2VrijemarktComponent } from './subjects/i-a/a-2-vrijemarkt.component';
import { A3EconomischComponent } from './subjects/i-a/a-3-economisch.component';
import { A4TransferComponent } from './subjects/i-a/a-4-transfer.component';
import { AInleidingComponent } from './subjects/i-a/a-inleiding.component';

import { GelijkheidComponent } from './subjects/i-b/gelijkheid.component';
import { NationalisatieComponent } from './subjects/i-b/nationalisatie.component';
import { InleidingBComponent } from './subjects/i-b/inleiding-b.component';
import { IBSocialistischAlternatiefComponent } from './subjects/i-b/i-b-socialistisch-alternatief.component';
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

import { IIDFiscaliteitComponent } from './subjects/ii-d/ii-d-fiscaliteit.component';
import { D2TaxshiftComponent } from './subjects/ii-d/d-2-taxshift.component';
import { D1FiscaleFraudeComponent } from './subjects/ii-d/d-1-fiscale-fraude.component';

import { IIEGezondheidszorgComponent } from './subjects/ii-e/ii-e-gezondheidszorg.component';
import { E2FarmaComponent } from './subjects/ii-e/e-2-farma.component';
import { E3ZiekteComponent } from './subjects/ii-e/e-3-ziekte.component';
import { E1GratisComponent } from './subjects/ii-e/e-1-gratis.component';

import { IIFPensioenenComponent } from './subjects/ii-f/ii-f-pensioenen.component';
import { F1EenheidsPensioenComponent } from './subjects/ii-f/f-1-eenheidspensioen.component';
import { F2BetaalbaarheidComponent } from './subjects/ii-f/f-2-betaalbaarheid.component';
import { F3VergrijzingComponent } from './subjects/ii-f/f-3-vergrijzing.component';

import { IIGOnderwijsComponent } from './subjects/ii-g/ii-g-onderwijs.component';
import { G1OnderwijsComponent } from './subjects/ii-g/g-1-onderwijs.component';
import { G2AngelsaksischComponent } from './subjects/ii-g/g-2-angelsaksisch.component';
import { G3FinsComponent } from './subjects/ii-g/g-3-fins.component';
import { G4MotivatieComponent } from './subjects/ii-g/g-4-motivatie.component';
import { G5SecundairComponent } from './subjects/ii-g/g-5-secundair.component';
import { G6VoorstellenComponent } from './subjects/ii-g/g-6-voorstellen.component';
import { GInleidingComponent } from './subjects/ii-g/g-inleiding.component';

import { IIHInternationaalComponent } from './subjects/ii-h/ii-h-internationaal.component';
import { H1EuropaComponent } from './subjects/ii-h/h-1-europa.component';
import { H2DerdewereldComponent } from './subjects/ii-h/h-2-derdewereld.component';
import { H3OorlogComponent } from './subjects/ii-h/h-3-oorlog.component';
import { H4AsielComponent } from './subjects/ii-h/h-4-asiel.component';

import { IIMisdaadComponent } from './subjects/ii-i/ii-i-misdaad.component';
import { I1VeiligComponent } from './subjects/ii-i/i-1-veilig.component';
import { I2AsielComponent } from './subjects/ii-i/i-2-justitie.component';
import { I3SchuldComponent } from './subjects/ii-i/i-3-schuld.component';
import { I4AfkoopwetComponent } from './subjects/ii-i/i-4-afkoopwet.component';
import { I5GevangenisComponent } from './subjects/ii-i/i-5-gevangenis.component';
import { IIIPartijComponent } from './subjects/iii/iii-partij.component';
import { III1RegeringsdeelnameComponent } from './subjects/iii/iii-1-regeringsdeelname.component';
import { III2FrontComponent } from './subjects/iii/iii-2-front.component';
import { III3PolitiekComponent } from './subjects/iii/iii-3-politiek.component';
import { III4PartijComponent } from './subjects/iii/iii-4-partij.component';
import { III5VeranderenComponent } from './subjects/iii/iii-5-veranderen.component';

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
  {
    path: 'F',
    component: IIDFiscaliteitComponent
  },
  {
    path: 'G',
    component: IIEGezondheidszorgComponent
  },
  {
    path: 'H',
    component: IIFPensioenenComponent
  },
  {
    path: 'I',
    component: IIGOnderwijsComponent
  },
  {
    path: 'J',
    component: IIHInternationaalComponent
  },
  {
    path: 'K',
    component: IIMisdaadComponent
  },
  {
    path: 'L',
    component: IIIPartijComponent
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
    A1KloofComponent,
    A2VrijemarktComponent,
    A3EconomischComponent,
    A4TransferComponent,
    AInleidingComponent,
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
    C3PersComponent,
    // F
    IIDFiscaliteitComponent,
    D1FiscaleFraudeComponent,
    D2TaxshiftComponent,
    // G
    IIEGezondheidszorgComponent,
    E1GratisComponent,
    E2FarmaComponent,
    E3ZiekteComponent,
    // H
    IIFPensioenenComponent,
    F1EenheidsPensioenComponent,
    F2BetaalbaarheidComponent,
    F3VergrijzingComponent,
    // I
    IIGOnderwijsComponent,
    G1OnderwijsComponent,
    G2AngelsaksischComponent,
    G3FinsComponent,
    G4MotivatieComponent,
    G5SecundairComponent,
    G6VoorstellenComponent,
    GInleidingComponent,
    // J
    IIHInternationaalComponent,
    H1EuropaComponent,
    H2DerdewereldComponent,
    H3OorlogComponent,
    H4AsielComponent,
    // K
    IIMisdaadComponent,
    I1VeiligComponent,
    I2AsielComponent,
    I3SchuldComponent,
    I4AfkoopwetComponent,
    I5GevangenisComponent,
    // L
    IIIPartijComponent,
    III1RegeringsdeelnameComponent,
    III2FrontComponent,
    III3PolitiekComponent,
    III4PartijComponent,
    III5VeranderenComponent
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
