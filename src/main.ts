import { enableProdMode, ɵrenderComponent } from '@angular/core';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

ɵrenderComponent(<any>AppComponent);
