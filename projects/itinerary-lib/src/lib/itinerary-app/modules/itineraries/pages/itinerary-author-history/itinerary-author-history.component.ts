import { Component } from '@angular/core';
import { SelectOption } from 'nextsapien-component-lib'; 
import { Iicon } from '../../../../_interface/icon'; 
import { ICONS } from '../../../../_constants/constants';
@Component({
  selector: 'app-itinerary-author-history',
  templateUrl: './itinerary-author-history.component.html',
  styleUrl: './itinerary-author-history.component.css'
})
export class ItineraryAuthorHistoryComponent {
  ICONS : Iicon = ICONS;

    passions: SelectOption<string>[] = [
      {
        value: 'Viyasa',
        label: 'Viyasa',
        selected: true,
        disabled: true,
      },
      {
        value: 'Skincare',
        label: 'Skincare',
        selected: true,
        disabled: true,
      },
      {
        value: 'Baking',
        label: 'Baking',
        selected: true,
        disabled: true,
      },
      {
        value: 'Hiking',
        label: 'Hiking',
        selected: true,
        disabled: true,
      },
      {
        value: 'Bicycle Racing',
        label: 'Bicycle Racing',
        selected: true,
        disabled: true,
      },
    ];

    back() {
      window.history.back();
    }
}
