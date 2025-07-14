import { Component } from '@angular/core';
 import { Location } from '@angular/common';
import { SelectOption } from 'nextsapien-component-lib'; 
import { ICONS } from '../../../_constants/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  ICONS = ICONS;
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

  constructor(private location: Location) {}

  back = () => this.location.back();
}
