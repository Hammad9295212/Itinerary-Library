import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../_interface/icon';
import { Itinerary } from '../../../../_models/Itinerary';
// import { ItineraryService } from '../../../../_services/itinerary.service';
import { ICONS } from '../../../../_constants/constants';
import { ItineraryService } from '../../../../_services/itinerary.service';
import { CustomDropdownMenuService } from '../../../../_services/custom-dropdown-menu.service';
import { LibMenuItem } from 'nextsapien-component-lib';
import { TranslateService } from '@ngx-translate/core';
import { SharePopupDataService } from '../../../../_services/share-popup-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
})
export class BuilderComponent implements OnInit {
  ICONS: Iicon = ICONS;
  draftItinerary: Itinerary[] = [];
  libMenuItems: Itinerary[] = [];
  libMenuItem: Array<LibMenuItem> = [];
  loading = true;
  openActionMenu = false;
  createActionMenuItems: Array<{
    actionItem: string;
    icon: string;
    title: string;
    description: string;
  }> = [];
  currentItinerary: Itinerary | undefined = undefined;
  
  //LIFE CYCLES
  constructor(
    private router: Router,
    private itineraryService: ItineraryService,
    private cd: ChangeDetectorRef,
    public customMenuList: CustomDropdownMenuService,
    private translate: TranslateService,
    public sharePopupDataService: SharePopupDataService
  ) {
  }

  initializeActions(translate: TranslateService) {
    this.createActionMenuItems = [{
      actionItem: 'create_custom',
      icon: "assets/icons/custom_itinerary.svg",
      title: translate.instant("ITINERARY.CREATE_CUSTOM_ITINERARY"),
      description: translate.instant("ITINERARY.CREATE_CUSTOM_ITINERARY_DESCRIPTION")
    }, {
      actionItem: 'create_quick',
      icon: "assets/icons/quick_itinerary.svg",
      title: translate.instant("ITINERARY.CREATE_QUICK_ITINERARY"),
      description: translate.instant("ITINERARY.CREATE_QUICK_ITINERARY_DESCRIPTION")
    }, {
      actionItem: 'create_lucky',
      icon: "assets/icons/lucky_itinerary.svg",
      title: translate.instant("ITINERARY.FEELING_LUCKY"),
      description: translate.instant("ITINERARY.FEELING_LUCKY_DESCRIPTION")
    }];
  }

  navigateArchives(): void {
    this.router.navigate(['/archives/archives']);
  }

  actionCardClicked(): void {
    this.router.navigate([ItinerariesRoutesEnum.ITINERARY, ItinerariesRoutesEnum.CREATE_ITINERARY]);
  }

  ngOnInit(): void {
    this.itineraryService.getItinerariesByUserId().subscribe((data: Itinerary[]) => {
      this.libMenuItems = data;
      this.libMenuItem = this.customMenuList.getMenuList('builder');
      this.loading = false;
      this.initializeActions(this.translate);
      this.cd.detectChanges();
    });
  }

  handleAddButton() {
    // this.router.navigate([ItinerariesRoutesEnum.ITINERARY, ItinerariesRoutesEnum.CREATE_ITINERARY]);
    this.openActionMenu = true;
  }

  hideActionMenu() {
    this.openActionMenu = false;
  }
  //UI LOGIC

  //NAVIGATIONS
  navToCreateItinerary(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY,
    ]);
  }

  menuClicked(item: Itinerary) {
    this.currentItinerary = item;
    this.sharePopupDataService.setPopupData(item);
  }
}
