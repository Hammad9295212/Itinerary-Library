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
  selector: 'app-existing-members',
  templateUrl: './existing-members.component.html',
  styleUrl: './existing-members.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExistingMembersComponent implements OnInit, OnDestroy {
  ICONS: Iicon = ICONS;
  itineraryMembers: IItineraryMember[] | undefined;
  loading: boolean = false;
  subscription!: Subscription;
  options: SelectOption<string>[] = [
    {
      image: ICONS['food'],
      label: 'Viynasa',
      value: 'Viynasa',
      selected: true,
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
  navToAllPeople(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.All_PEOPLE,
    ]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
