import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { MatDialogModule } from '@angular/material/dialog';
import {
  ButtonsModule,
  LibModalModule,
  RangeSelectorModule,
  ToggleModule,
} from 'nextsapien-component-lib';
import { ItineraryLibRoutingModule } from './itinerary-lib-routing.module';
import { ItineraryLibComponent } from './itinerary-lib.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';   
import { UserModule } from './modules/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const httpLoaderFactory = (http: HttpBackend): TranslateHttpLoader =>
  new TranslateHttpLoader(new HttpClient(http), './assets/i18n/', '.json');

@NgModule({
  declarations: [ItineraryLibComponent],
  imports: [  
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
    ButtonsModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    LibModalModule,
    ToggleModule,
    RangeSelectorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    UserModule,
    ItineraryLibRoutingModule,
    
  ],
  exports: [ItineraryLibComponent, ItineraryLibRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideAnimationsAsync(), provideIonicAngular()],
})
export class ItineraryLibModule { }
