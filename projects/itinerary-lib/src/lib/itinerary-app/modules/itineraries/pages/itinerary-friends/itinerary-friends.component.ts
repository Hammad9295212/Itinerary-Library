import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-itinerary-friends',
  templateUrl: './itinerary-friends.component.html',
  styleUrl: './itinerary-friends.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItineraryFriendsComponent {
  constructor(private _location: Location) {}
  backButton(): void {
    this._location.back();
  }
}
