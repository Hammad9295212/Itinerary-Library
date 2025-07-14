import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectOption } from 'nextsapien-component-lib';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { UserRoutes } from '../../../../../../_enums/userRoutes.enum';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  ICONS = ICONS;
  imageLoaded: boolean = false;
  usersImageSrc = '/assets/images/users.png';
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

  constructor(private router: Router) { }

  onImageLoad(): void {
    this.imageLoaded = true;
  }

  handleUserStackTileClick(clickedOption:string): void {
    switch (clickedOption) {
      case 'upvotes':
        this.router.navigate([
          ItinerariesRoutesEnum.ITINERARY,
          ItinerariesRoutesEnum.ITINERARY_DETAIL,
          ItinerariesRoutesEnum.ITINERARY_UPVOTE_USERS,
        ]);
        break;
      case 'members':
        this.router.navigate([
          ItinerariesRoutesEnum.ITINERARY,
          ItinerariesRoutesEnum.ITINERARY_DETAIL,
          ItinerariesRoutesEnum.ITINERARY_USERS,
        ]);
        break;
      case 'watching':
        this.router.navigate([
          ItinerariesRoutesEnum.ITINERARY,
          ItinerariesRoutesEnum.ITINERARY_DETAIL,
          ItinerariesRoutesEnum.ITINERARY_WATCHING_USERS,
        ]);
        break;
    }
  }

  //NAVIGATIONS
  navToBranch = (): Promise<boolean> =>
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.BRANCHED_ITINERARIES,
    ]);

  navToComments(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.COMMENTS_ROUTE,
    ]);
  }

  navigateToUpotes() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_WATCHING_USERS,
    
    ]);
  }

  navigateToAuthorHistory() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_DETAIL,
      ItinerariesRoutesEnum.ITINERARY_AUTHOR_HISTORY,
    ]);
  }

  navToUserProfile(): void {
    this.router.navigate([UserRoutes.profile]);
  }
}
