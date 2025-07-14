import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  // eslint-disable-next-line no-console -- because this is the required console
  .catch(err => console.error(err));
