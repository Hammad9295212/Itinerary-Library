import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { SelectOption } from 'nextsapien-component-lib'; 
import { Iicon } from '../../../../../../_interface/icon'; 
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-create-itinerary-member-details',
  templateUrl: './create-itinerary-member-details.component.html',
  styleUrl: './create-itinerary-member-details.component.css',
})
export class CreateItineraryMemberDetailsComponent {
  ICONS: Iicon = ICONS;
  foodOptions: SelectOption<string>[] = [
    {
      value: 'Viynasa',
      label: 'Viynasa',
      image: ICONS['food'],
    },
    {
      value: 'Italian',
      label: 'Italian',
      image: ICONS['food'],
    },
    {
      value: 'Boston Cream Pie',
      label: 'Boston Cream Pie',
      image: ICONS['food'],
    },
  ];

  destinationOptions: SelectOption<string>[] = [
    {
      value: 'Bali - Indonesia',
      label: 'Bali - Indonesia',
      image: ICONS['food'],
    },
    {
      value: 'Paris - France',
      label: 'Paris - France',
      image: ICONS['food'],
    },
    {
      value: 'Dubai - United Arab Emirates',
      label: 'Dubai - United Arab Emirates',
      image: ICONS['food'],
    },
  ];

  //LIFE CYCLES
  constructor(private location: Location) {}

  //NAVIGATIONS
  back(): void {
    this.location.back();
  }
}
