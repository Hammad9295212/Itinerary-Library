import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { ICONS } from '../../../../../../_constants/constants';
@Component({
  selector: 'app-create-itinerary-header',
  templateUrl: './create-itinerary-header.component.html',
  styleUrl: './create-itinerary-header.component.css',
})
export class CreateItineraryHeaderComponent {
  @Input() heading: string = '';
  @Input() progressBarValue: number = 0;
  @Input() discardItineraryId: string = '';
  @Input() class: string = '';
  protected ICONS: Iicon = ICONS;
  protected isOpen: boolean = false;

  //LIFE CYCLE
  constructor(
    private router: Router,
    private location: Location,
  ) {}

  //UI LOGIC
  showPopup(): void {
    this.isOpen = true;
  }

  hidePopup(): void {
    this.isOpen = false;
  }

  hidePopupAndNavigate(): void {
    this.isOpen = false;
    setTimeout(() => {
      this.navToItineraryExplore();
    }, 0);
  }

  //NAVIGATIONS
  back(): void {
    this.location.back();
  }

  navToItineraryExplore(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.EXPLORE,
    ]);
  }
}
