import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { SelectOption } from 'nextsapien-component-lib';
import { Subscription } from 'rxjs';  
import { ItinerariesRoutesEnum } from '../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../_interface/icon';
import { IItineraryMember } from '../../../../../_models/itineraryMember'; 
import { ICONS } from '../../../../../_constants/constants';
import { AssetsService } from '../../../../../_services/assets.service';

@Component({
  selector: 'app-existing-friends',
  templateUrl: './existing-friends.component.html',
  styleUrl: './existing-friends.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExistingFriendsComponent implements OnInit, OnDestroy {
  ICONS: Iicon = ICONS;
  itineraryMembers: IItineraryMember[] | undefined;
  loading: boolean = false;
  subscription!: Subscription;
  image: string = ICONS['userimageSrc'];
  passions: SelectOption<string>[] = [
    {
      image: ICONS['food'],
      value: 'Viyasa',
      label: 'Viyasa',
      selected: true,
      disabled: true,
    },
  ];

  constructor(
    private router: Router,
    private _location: Location,
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef,
  ) {}

  //UI LOGIC

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.assetService.getMembers().subscribe((data) => {
      this.itineraryMembers = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}

  //NAVIGATIONS
  backButton(): void {
    this._location.back();
  }
  navToListFriendUsers(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.LIST_FRIENDS,
    ]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
