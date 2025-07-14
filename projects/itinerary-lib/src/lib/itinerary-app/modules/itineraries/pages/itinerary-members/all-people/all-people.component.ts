import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';  
import { ItinerariesRoutesEnum } from '../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../_interface/icon';
import { IItineraryMember } from '../../../../../_models/itineraryMember'; 
import { CustomDropdownMenuService } from '../../../../../_services/custom-dropdown-menu.service';
import { ModalService } from '../../../../../_services/modal.service';
import { ICONS } from '../../../../../_constants/constants';
import { AssetsService } from '../../../../../_services/assets.service';
@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrl: './all-people.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPeopleComponent implements OnInit, OnDestroy {
  ICONS: Iicon = ICONS;
  itineraryMembers: IItineraryMember[] = [];
  images: string[] = [];
  loading: boolean = false;
  subscription!: Subscription;

  constructor(
    public customMenuList: CustomDropdownMenuService,
    public modalService: ModalService,
    private _location: Location,
    private router: Router,
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getTotalItineraryMembers();
  }

  //UI LOGIC
  handleSearchStringChange(_$event: string) {}

  clear(): void {}
  getTotalItineraryMembers() {
    this.loading = true;
    this.subscription = this.assetService.getMembers().subscribe((data) => {
      this.itineraryMembers = data;
      this.images = this.itineraryMembers.map((x) => x.memberPic);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  //NAVIGATIONS
  navToInvite(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.SEND_INVITE,
    ]);
  }
  navToAllInvites(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ALL_INVITES_SENT,
    ]);
  }

  backButton(): void {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
