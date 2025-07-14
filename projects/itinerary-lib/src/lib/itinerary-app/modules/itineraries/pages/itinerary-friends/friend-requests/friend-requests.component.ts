import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';  
import { Iicon } from '../../../../../_interface/icon';
import { IItineraryMember } from '../../../../../_models/itineraryMember'; 
import { ICONS } from '../../../../../_constants/constants';
import { AssetsService } from '../../../../../_services/assets.service';
@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrl: './friend-requests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendRequestsComponent implements OnInit, OnDestroy {
  ICONS: Iicon = ICONS;
  itineraryMembers: IItineraryMember[] = [];
  loading: boolean = false;
  subscription!: Subscription;

  constructor(
    private _location: Location,
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.getTotalItineraryMembers();
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
  handleSearchStringChange(_$event: string) {}
  clear(): void {}

  backButton(): void {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
