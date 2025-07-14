import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ItinerariesRoutesEnum } from '../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../_interface/icon';
import { ICONS } from '../../../../../_constants/constants';
 
@Component({
  selector: 'app-send-invite',
  templateUrl: './send-invite.component.html',
  styleUrl: './send-invite.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendInviteComponent implements OnInit {
  ICONS: Iicon = ICONS;

  ngOnInit(): void {}

  constructor(
    private _location: Location,
    private router: Router,
  ) {}

  handleSearchStringChange(_$event: string) {}

  clear(): void {}

  backButton(): void {
    this._location.back();
  }

  navToAllInvites(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.ALL_INVITES_SENT,
    ]);
  }
}
