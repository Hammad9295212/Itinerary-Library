import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { INotification } from '../../../../_interface/notification';
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { AssetsService } from '../../../../_services/assets.service';
 
interface ItineraryNotification {
  notification: INotification;
  needReview: boolean;
  callback: () => void;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent implements OnInit {
  notifications: ItineraryNotification[] = [];
  loading: boolean = false;

  //LIFE CYCLE
  constructor(
    private _location: Location,
    private router: Router,
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.assetService.getNotifications().subscribe((res) => {
      this.notifications = res.map(
        (x) =>
          <ItineraryNotification>{
            notification: x,
            needReview: false,
            callback: () => {},
          },
      );
      this.notifications[0].needReview = true;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  //NAVIGATIONS
  backButton(): void {
    this._location.back();
  }

  navToCommentApproval() {
    this.router.navigate([
      'itineraries',
      ItinerariesRoutesEnum.COMMENT_UPDATE_REQUEST,
    ]);
  }
}
