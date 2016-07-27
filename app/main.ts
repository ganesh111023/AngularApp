import { bootstrap }    from '@angular/platform-browser-dynamic';

import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { appRouterProviders } from './app.routes';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
disableDeprecatedForms(),
provideForms(),appRouterProviders
])
.catch((err: any) => console.error(err));