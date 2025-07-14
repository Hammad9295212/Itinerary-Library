import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem, SelectOption } from 'nextsapien-component-lib';
import { Subscription } from 'rxjs';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { IItineraryMember } from '../../../../../../_models/itineraryMember'; 
import { CustomDropdownMenuService } from '../../../../../../_services/custom-dropdown-menu.service';
import { ICONS } from '../../../../../../_constants/constants';
import { AssetsService } from '../../../../../../_services/assets.service';

@Component({
  selector: 'app-create-itinerary-user-search',
  templateUrl: './create-itinerary-user-search.component.html',
  styleUrl: './create-itinerary-user-search.component.css',
})
export class CreateItineraryUserSearchComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  itineraryMembers: IItineraryMember[] = [];
  private subscription!: Subscription;
  ICONS: Iicon = ICONS;
  option: SelectOption<string> = {
    value: 'Viynasa',
    label: 'Viynasa',
    image: ICONS['food'],
  };
  libMenuItems: LibMenuItem[] = [];

  //LIFE CYCLES
  constructor(
    private location: Location,
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef,
    private customMenuList: CustomDropdownMenuService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getTotalItineraryMembers();
    this.libMenuItems = this.customMenuList.getMenuList(
      'create-itinerary-user-search',
    );

    this.libMenuItems = this.libMenuItems.map((x) => {
      return {
        ...x,
        command: () => {
          this.navToMemberDetail();
        },
      };
    });
  }

  //UI LOGIC
  getTotalItineraryMembers(): void {
    this.loading = true;
    this.subscription = this.assetService.getMembers().subscribe((data) => {
      this.itineraryMembers = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  //NAVIGATIONS
  navToMemberDetail(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY_MEMBER_DETAILS,
      '1',
    ]);
  }

  back(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
