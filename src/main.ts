import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

checkValidBrowser(document.body);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

export function checkValidBrowser(element: HTMLElement) {
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  if (isIE) {
    element.innerHTML = `
    <div >
      Deze browser wordt niet ondersteund. Gebruik a.u.b. Chrome, Firefox, Edge of Safari
    </div>
    `;
  }
}
