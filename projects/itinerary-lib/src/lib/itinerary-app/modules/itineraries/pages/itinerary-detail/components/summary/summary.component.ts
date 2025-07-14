import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Router } from '@angular/router';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ApiService } from '../../../../../../_services/api.service';
import { LocationService } from '../../../../../../_services/location.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  initialLocation = { lat: 24.8607, lng: 67.0011 }; // Centered on California
  ICONS: { [key: string]: string } = ICONS;
  usersImageSrc = '/assets/images/users.png';

  places: Itinerary[] = [];

  constructor(
    public locationService: LocationService,
    public apiService: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  handleUserStackTileClick(clickedOption: string): void {
    switch (clickedOption) {
      case 'upvotes':
        // Navigate to the upvotes page
         this.router.navigate([
            ItinerariesRoutesEnum.ITINERARY,
            ItinerariesRoutesEnum.ITINERARY_DETAIL,
            ItinerariesRoutesEnum.ITINERARY_USERS,
          ]);
        break;
    }
  }

  ngOnInit(): void {
    this.apiService.get('/assets/ItinerariesData.json').subscribe((data) => {
      this.places = data as Itinerary[];
      this.cdr.detectChanges();
    });
    this.locationService.getCurrentLocation().subscribe((location) => {
      this.initialLocation.lat = location.lat;
      this.initialLocation.lng = location.long;
    });
  }

  navToStartLocation() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY_ORIGIN,
      1,
    ]);
  }

  navToAddPlace() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.SELECT_ITINERARY_ADD_PLACE,
      1,
    ]);
  }

  navToMembers() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY,
    ]);
  }

  navToAddPlaceDateTime() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.SELECT_ITINERARY_ADD_PLACE,
      1,
      ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_DATETIME,
    ]);
  }
}
