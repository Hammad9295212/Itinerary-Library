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
  selector: 'app-list-friend-users',
  templateUrl: './list-friend-users.component.html',
  styleUrl: './list-friend-users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFriendUsersComponent implements OnInit, OnDestroy {
  ICONS: Iicon = ICONS;
  friends: IItineraryMember[] = [];
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
      this.friends = data;
      this.images = this.friends.map((x) => x.memberPic);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  sendRequest(i: number): void {
    this.friends[i].added = true;
    this.cdr.detectChanges();
  }

  //NAVIGATIONS
  navToSendRequest(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.SEND_FRIEND_REQUEST,
    ]);
  }
  navToFriendRequests(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.FRIEND_REQUESTS,
    ]);
  }

  backButton(): void {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
