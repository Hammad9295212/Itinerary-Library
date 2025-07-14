import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ItineraryDrawModeTransferService } from '../../../../../../_services/itinerary.drawmode.transfer';
import { Iicon } from '../../../../../../_interface/icon';
import { ICONS } from '../../../../../../_constants/constants';
import { LibMapsComponent } from 'nextsapien-component-lib';
const defaultIcon = 'assets/icons/map-markers-yellow.svg';
const selectedIcon = 'assets/icons/restu-icon-large.svg';


@Component({
  selector: 'lib-create-itinerary-no-visual-preview',
  templateUrl: './create-itinerary-no-visual-preview.component.html',
  styleUrl: './create-itinerary-no-visual-preview.component.css'
})
export class CreateItineraryNoVisualPreviewComponent implements AfterViewInit {
  ICONS: Iicon = ICONS;
  isOpen: boolean = true;
  selectedMarkers: google.maps.Marker[] = [];//Selected markers on the map
  placesResult!: google.maps.places.PlaceResult[];//Places result required for preview
  placeMarkers!: {
    marker: google.maps.Marker,
    place: google.maps.places.PlaceResult
  }[]
  allMarkers: google.maps.Marker[] = [];
  @ViewChild('libMap') libMap!: LibMapsComponent;
  constructor(
    public transferService: ItineraryDrawModeTransferService
  ) {
  }

  preview() {
    
  }

  ngAfterViewInit() {
    this.libMap.map.googleMap?.setCenter(this.transferService.location);
    this.libMap.map.googleMap?.setZoom(15);

    //Add marker for user position
    new google.maps.Marker({
      map: this.libMap.map.googleMap,
      position: this.transferService.location,
      title: 'You are here',
      icon: {
        url: 'assets/current_location.svg',
        scaledSize: new google.maps.Size(40, 40),
      },
    });
    this.addMarkersToMap(this.libMap.map.googleMap!);
  }

    addMarkersToMap(map: google.maps.Map) {
    const selectedPlaceIds = new Set(this.transferService.selectedPlaces.map(p => p.place_id));

    // Clear existing markers
    this.allMarkers.forEach(marker => marker.setMap(null));
    this.allMarkers = [];

    // Plot selected places in RED
    this.transferService.selectedPlaces.forEach(place => {
      if (place.geometry?.location) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
          title: place.name,
          icon: {
            url: selectedIcon
          }
        });
        this.selectedMarkers.push(marker);
        this.allMarkers.push(marker);
      }
    });

    // Plot non-selected places (avoid duplicates) in DEFAULT
    this.transferService.places.forEach(place => {
      if (
        place.geometry?.location &&
        !selectedPlaceIds.has(place.place_id)
      ) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
          title: place.name,
          icon: {
            url: defaultIcon
          }
        });
        this.allMarkers.push(marker);
      }
    });

    this.optimizeAndRender();
  }

  showBottomModal(): void {
    this.isOpen = true;
  }

  optimizeAndRender() {
    if (this.selectedMarkers.length < 2) return;

    // Sort markers based on latitude (optional — adjust this logic as per your direction needs)
    this.selectedMarkers.sort((a, b) => {
      const posA = a.getPosition();
      const posB = b.getPosition();
      if (!posA) return 1;
      if (!posB) return -1;
      return posB.lat() - posA.lat();
    });

    const markerPositions = this.selectedMarkers
      .map(m => m.getPosition())
      .filter((p): p is google.maps.LatLng => !!p);

    if (markerPositions.length < 2) return;

    const destination = markerPositions[markerPositions.length - 1];
    const startPos = markerPositions[0];

    // Calculate a synthetic starting point slightly before the first marker (northwards)
    const OFFSET_METERS = 50; // adjust this for how far back the path should start
    const syntheticStart = google.maps.geometry.spherical.computeOffset(startPos, -OFFSET_METERS, 180);

    const waypoints: google.maps.DirectionsWaypoint[] = markerPositions.map(pos => ({
      location: pos,
      stopover: true
    }));

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.libMap.map.googleMap!,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: '#FFFFFF',
        strokeOpacity: 1.0,
        strokeWeight: 4,
      }
    });

    directionsService.route(
      {
        origin: syntheticStart,
        destination,
        waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
        optimizeWaypoints: false,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          directionsRenderer.setDirections(response);

          // Draw custom markers
          new google.maps.Marker({
            position: syntheticStart,
            map: this.libMap.map.googleMap!,
            icon: {
              url: 'assets/icons/start-loc-marker.svg',
              scaledSize: new google.maps.Size(30, 30),
            },
            title: 'Start Point',
          });

          new google.maps.Marker({
            position: destination,
            map: this.libMap.map.googleMap!,
            icon: {
              url: 'assets/icons/en-location.svg',
              scaledSize: new google.maps.Size(30, 30),
            },
            title: 'End Point',
          });
        }
      }
    );
  }
}
