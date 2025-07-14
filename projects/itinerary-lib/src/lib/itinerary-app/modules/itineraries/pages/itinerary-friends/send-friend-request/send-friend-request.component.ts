import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'; 
import { Subscription } from 'rxjs'; 
import { Iicon } from '../../../../../_interface/icon';
import { IItineraryMember } from '../../../../../_models/itineraryMember'; 
import { ICONS } from '../../../../../_constants/constants';
import { AssetsService } from '../../../../../_services/assets.service';
@Component({
  selector: 'app-send-friend-request',
  templateUrl: './send-friend-request.component.html',
  styleUrl: './send-friend-request.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendFriendRequestComponent implements OnInit {
  ICONS: Iicon = ICONS;
  loading: boolean = false;
  subscription!: Subscription;
  people: IItineraryMember[] = [];
  searched: IItineraryMember[] = [];
  images: string[] = [];

  constructor(
    private _location: Location,
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getTotalItineraryMembers();
  }

  //UI LOGIC
  getTotalItineraryMembers() {
    this.loading = true;
    this.subscription = this.assetService.getMembers().subscribe((data) => {
      this.searched = this.people = data;
      this.images = this.people.map((x) => x.memberPic);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  handleSearchStringChange($event: string) {
    if (!$event) {
      this.searched = this.people;
    } else {
      this.searched = this.people.filter(
        (x) =>
          x.memberName.toLowerCase().includes($event.toLowerCase()) ||
          x.memberName.toLowerCase().includes($event.toLowerCase()),
      );
    }
  }
  invite(i: number) {
    this.people[i].added = true;
  }
  clear(): void {}

  //NAVIGATIONS
  backButton(): void {
    this._location.back();
  }
}
