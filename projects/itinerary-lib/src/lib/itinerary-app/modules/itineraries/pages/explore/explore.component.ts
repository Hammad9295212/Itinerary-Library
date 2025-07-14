import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib'; 
import { CustomDropdownMenuService } from '../../../../_services/custom-dropdown-menu.service';
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../_interface/icon';
import { ModalService } from '../../../../_services/modal.service';
import { ICONS } from '../../../../_constants/constants';
import { ModalSendClientService } from '../../../../_services/modal.sendclient.service';
import { ItineraryService } from '../../../../_services/itinerary.service';
import { Itinerary } from '../../../../_models/Itinerary';
import { ModalShareUrlClientService } from '../../../../_services/modal.shareurlservice';
import { SharePopupDataService } from '../../../../_services/share-popup-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  libMenuItems: Itinerary[] = [];
  ICONS: Iicon = ICONS;
  currentItinerary: Itinerary | undefined = undefined;

  ngOnInit(): void {
    this.itineraryService.getAllItinararies().subscribe((data) => {
      this.libMenuItems = data;
      this.libMenuItem = this.customMenuList.getMenuList('itineraries');
      this.cd.detectChanges();
    });
  }

  constructor(
    public customMenuList: CustomDropdownMenuService,
    private router: Router,
    public modalService: ModalService,
    public modalSendToClientService: ModalSendClientService,
    private itineraryService: ItineraryService,
    private cd: ChangeDetectorRef,
    public shareModalService: ModalShareUrlClientService,
    public sharePopupDataService: SharePopupDataService
  ) {}

  //UI LOGIC
  handleSearchStringChange(_$event: string) {}

  //NAVIGATIONS
  clear(): void {}
  navToCommentSearch() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.COMMENT_SEARCH,
    ]);
  }

  navigateToDetail(_item: Itinerary): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ITINERARY_DETAIL,
    ]);
  }

  navToBranchItinerary(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.BRANCHED_ITINERARIES,
    ]);
  }

  navToComments(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.COMMENTS_ROUTE,
    ]);
  }

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

  menuClicked(item: Itinerary) {
    this.currentItinerary = item;
    this.sharePopupDataService.setPopupData(item);
  }
}
