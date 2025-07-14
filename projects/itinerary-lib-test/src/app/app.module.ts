import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core'; 
import { ItineraryLibModule } from 'itinerary-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    ItineraryLibModule, 
    AppRoutingModule, 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }
 }
