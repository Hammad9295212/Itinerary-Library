import { Injectable } from '@angular/core'; 
import { ItinerariesRoutesEnum } from '../_enums/ItenariesRoutes.enum';
import { IBottomNavigationList } from '../_interface/bottomNavigationList';
import { Iicon } from '../_interface/icon';
import { ICONS } from '../_constants/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BottomNavigationService {
  public isShowNavigation: boolean = false;
  ICONS: Iicon = ICONS;
  bottomNavList = [
    {
      id: 1,
      label: 'Home',
      iconPath: ICONS['home'],
      clickedIconPath: ICONS['homeRed'],
      routerLink: ItinerariesRoutesEnum.ITINERARY_EXPLORE,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
    {
      id: 2,
      label: 'Requests',
      iconPath: ICONS['favorite'],
      clickedIconPath: ICONS['favorite'],
      routerLink: ItinerariesRoutesEnum.REQUESTS,
      cssClass: '',
      height: '19',
      width: '19',
      selected: false,
    },
    {
      id: 3,
      label: 'Info',
      iconPath: ICONS['chat'],
      clickedIconPath: ICONS['chatRed'],
      routerLink: ItinerariesRoutesEnum.INFO,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
    {
      id: 4,
      label: 'Itineraries',
      iconPath: ICONS['itineraries'],
      clickedIconPath: ICONS['itinerariesRed'],
      routerLink: ItinerariesRoutesEnum.ITINERARY_BUILDER,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
    {
      id: 5,
      label: 'Profile',
      iconPath: ICONS['user'],
      clickedIconPath: ICONS['userRed'],
      routerLink: ItinerariesRoutesEnum.PROFILE,
      cssClass: '',
      height: '16',
      width: '17',
      selected: false,
    },
  ];
  constructor(private readonly router: Router) {
    
  }

  onNavigationChange(
    data: IBottomNavigationList[],
    nav: IBottomNavigationList,
  ): void {
    if(data) {
      this.router.navigate([nav.routerLink]);
    }
  }

  setActive(nav: IBottomNavigationList): void {
    this.bottomNavList.forEach((element: IBottomNavigationList) => {
      element.cssClass = '';
      if(nav.id === element.id) {
        element.cssClass = 'active';
      }
    });
  }
}
