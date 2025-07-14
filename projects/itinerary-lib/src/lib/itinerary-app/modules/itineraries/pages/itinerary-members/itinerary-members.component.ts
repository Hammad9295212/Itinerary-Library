import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-itinerary-members',
  templateUrl: './itinerary-members.component.html',
  styleUrl: './itinerary-members.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItineraryMembersComponent {
  constructor(private _location: Location) {}
  backButton(): void {
    this._location.back();
  }
}
