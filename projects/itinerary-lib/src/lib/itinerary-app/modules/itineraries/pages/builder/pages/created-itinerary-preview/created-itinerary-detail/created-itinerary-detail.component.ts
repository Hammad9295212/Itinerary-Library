import { Component } from '@angular/core'; 
import { Itinerary } from '../../../../../../../_models/Itinerary';
import { ApiService } from '../../../../../../../_services/api.service';
import { LocationService } from '../../../../../../../_services/location.service';
import { ICONS } from '../../../../../../../_constants/constants';

@Component({
  selector: 'app-created-itinerary-detail',
  templateUrl: './created-itinerary-detail.component.html',
  styleUrl: './created-itinerary-detail.component.css',
})
export class CreatedItineraryDetailComponent {
  initialLocation = { lat: 24.8607, lng: 67.0011 }; // Centered on California
  ICONS: { [key: string]: string } = ICONS;
  usersImageSrc = '/assets/images/users.png';

  places: Itinerary[] = [];

  constructor(
    public locationService: LocationService,
    public apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.apiService.get('/assets/ItinerariesData.json').subscribe((data) => {
      this.places = data as Itinerary[];
    });
    this.locationService.getCurrentLocation().subscribe((location) => {
      this.initialLocation.lat = location.lat;
      this.initialLocation.lng = location.long;
    });
  }
}
