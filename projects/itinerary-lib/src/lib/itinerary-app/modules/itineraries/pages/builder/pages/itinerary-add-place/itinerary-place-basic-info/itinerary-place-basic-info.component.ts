import { Component } from '@angular/core';  
import { Iicon } from '../../../../../../../_interface/icon';
import { ICONS } from '../../../../../../../_constants/constants';

@Component({
  selector: 'app-itinerary-place-basic-info',
  templateUrl: './itinerary-place-basic-info.component.html',
  styleUrl: './itinerary-place-basic-info.component.css',
})
export class ItineraryPlaceBasicInfoComponent {
  ICONS: Iicon = ICONS;
}
