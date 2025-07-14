import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib'; 
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { UserRoutes } from '../../../../_enums/userRoutes.enum';
import { CustomDropdownMenuService } from '../../../../_services/custom-dropdown-menu.service';
import { ICONS } from '../../../../_constants/constants';
import { Iicon } from '../../../../_interface/icon';
 
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-branched-itineraries',
  templateUrl: './branched-itineraries.component.html',
  styleUrl: './branched-itineraries.component.scss',
})
export class BranchedItinerariesComponent {
  libMenuItem: LibMenuItem[] = [
    {
      title: 'New File',
      titlePrefix: 'Create',
      titleSuffix: '',
      iconUrl: '/assets/icons/new-file.svg',
      iconName: 'note_add',
      cssClass: 'menu-new-file',
      active: false,
      disabled: false,
      separator: false,
      listItem: { id: 6, type: 'file' },
      listItemIndex: 0,
      command: (_item?: LibMenuItem) => {},
    },
    {
      title: 'Open File',
      titlePrefix: 'Browse',
      titleSuffix: '',
      iconUrl: '/assets/icons/open-file.svg',
      iconName: 'folder_open',
      cssClass: 'menu-open-file',
      active: false,
      disabled: false,
      separator: false,
      listItem: { id: 7, type: 'file' },
      listItemIndex: 1,
      command: (_item?: LibMenuItem) => {},
    },
    {
      title: 'Save File',
      titlePrefix: 'Save',
      titleSuffix: 'Changes',
      iconUrl: '/assets/icons/save.svg',
      iconName: 'save',
      cssClass: 'menu-save-file',
      active: false,
      disabled: false,
      separator: false,
      listItem: { id: 8, type: 'file' },
      listItemIndex: 2,
      command: (_item?: LibMenuItem) => {},
    },
    {
      title: 'Print',
      titlePrefix: 'Print',
      titleSuffix: '',
      iconUrl: '/assets/icons/print.svg',
      iconName: 'print',
      cssClass: 'menu-print',
      active: false,
      disabled: false,
      separator: false,
      listItem: { id: 9, type: 'action' },
      listItemIndex: 3,
      command: (_item?: LibMenuItem) => {},
    },
    {
      title: 'Exit',
      titlePrefix: 'Close',
      titleSuffix: 'Application',
      iconUrl: '/assets/icons/close.svg',
      iconName: 'close',
      cssClass: 'menu-exit',
      active: false,
      disabled: false,
      separator: false,
      listItem: { id: 10, type: 'action' },
      listItemIndex: 4,
      command: (_item?: LibMenuItem) => {},
    },
  ];

  ICONS: Iicon = ICONS;
  temps: string[] = Array(10)
    .fill('')
    .map(() => Math.floor(Math.random() * 1000).toString());

  constructor(
    private customMenuList: CustomDropdownMenuService,
    private location: Location,
    private router: Router,

    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(() => {
      this.initializeTemps();
    });
    this.libMenuItem = this.customMenuList.getMenuList('itineraries');
  }

  initializeTemps(): void {
    this.temps = Array(10)
      .fill('')
      .map(() => Math.floor(Math.random() * 1000).toString());
  }

  //NAVIGATIONS
  back = (): void => this.location.back();

  navToComment(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.COMMENTS_ROUTE,
    ]);
  }

  navigateToDetail(_item: LibMenuItem) {
    this.router.navigate([
      `itineraries/${ItinerariesRoutesEnum.ITINERARY_DETAIL}`,
    ]);
  }

  navToBranchItinerary = (id: string): void => {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.BRANCHED_ITINERARIES,
      id,
    ]);
  };

  navToUsers = (): void => {
    this.router.navigate([UserRoutes.profile]);
  };

  navToDetail = (): void => {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_DETAIL,
    ]);
  };

  navToMoreDetail = (): void => {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_DETAIL,
      ItinerariesRoutesEnum.ITINERARY_MORE_DETAIL,
    ]);
  };

  navToStories(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.STORIES,
    ]);
  }

  navToNotifications(): void {
    this.router.navigate([
     ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_WATCHING_USERS,
    ]);
  }
   navToWatching(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_WATCHING_USERS,
    ]);
  }
}
