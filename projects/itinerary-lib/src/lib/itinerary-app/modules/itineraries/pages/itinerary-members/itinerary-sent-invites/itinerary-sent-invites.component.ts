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
import { AssetsService } from '../../../../../_services/assets.service';
import { ICONS } from '../../../../../_constants/constants';
@Component({
  selector: 'app-itinerary-sent-invites',
  templateUrl: './itinerary-sent-invites.component.html',
  styleUrl: './itinerary-sent-invites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItinerarySentInvitesComponent implements OnInit, OnDestroy {
  ICONS: Iicon = ICONS;
  itineraryMembers: IItineraryMember[] | undefined;
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
