import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [AppComponent, ScrollViewComponent, MainComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    // other imports here
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
