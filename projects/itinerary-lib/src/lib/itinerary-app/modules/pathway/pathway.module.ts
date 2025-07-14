import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule, LibMapModule } from 'nextsapien-component-lib';
import { SharedModule } from '../../shared/shared.module';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { MapHeaderComponent } from './components/map-header/map-header.component';
import { DefaultDestinationComponent } from './pages/default-destination/default-destination.component';
import { ItineraryPreviewComponent } from './pages/itinerary-preview/itinerary-preview.component';
import { NonVisualMapFilterComponent } from './pages/non-visual-map-filter/non-visual-map-filter.component';
import { PathwayRoutingModule } from './pathway-routing.module';
import { PathwayComponent } from './pathway.component';   
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '../../../../environments/environment';
 
@NgModule({
  declarations: [
    NonVisualMapFilterComponent,
    ItineraryPreviewComponent,
    DefaultDestinationComponent,
    PathwayComponent,
    GooglemapComponent,
    MapHeaderComponent,
  ],
  imports: [
    TranslateModule,
    CommonModule,
    PathwayRoutingModule,
    SharedModule,
    ButtonsModule,
    FormsModule,
    GoogleMapsModule,
    MatIcon,
    LibMapModule.forRoot({
      googleMapsKey: environment.googleMapsKey,
      googleMapsURL: environment.googleMapsURL,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PathwayModule {}
