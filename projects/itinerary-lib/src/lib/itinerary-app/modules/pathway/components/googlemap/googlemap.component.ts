/// <reference types="google.maps" />

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';  
import { ICONS } from '../../../../_constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
})
export class GooglemapComponent implements OnChanges {
  @Input() newDestination!: string;
  @Output() destinationAdded = new EventEmitter<string>();

  mapOptions: google.maps.MapOptions = {
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#212121' }] },
      { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'administrative.country',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }],
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#bdbdbd' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#181818' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#1b1b1b' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [{ color: '#2c2c2c' }],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#8a8a8a' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ color: '#373737' }],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#3c3c3c' }],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{ color: '#4e4e4e' }],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }],
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#000000' }],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#3d3d3d' }],
      },
    ],

    mapTypeControl: false,
    disableDefaultUI: true, // Disable default UI
    zoomControl: true, // Enable zoom control
  };
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 5;
  drawingManager!: google.maps.drawing.DrawingManager;
  map!: google.maps.Map;
  vertices: google.maps.LatLngLiteral[] = [];
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  currentLocation!: google.maps.LatLngLiteral;
  destination: string = '';
  waypoints: string[] = [];

  @ViewChild(GoogleMap) googleMap!: GoogleMap;
  ngOnInit(): void {
    this.getUserLocation();
  }

  ngAfterViewInit(): void {
    this.initializeDirectionsRenderer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newDestination'] && changes['newDestination'].currentValue) {
      this.addDestinationFromParent(changes['newDestination'].currentValue);
    }
  }

  initializeDirectionsRenderer(): void {
    if (this.googleMap && this.googleMap.googleMap) {
      this.directionsRenderer.setMap(this.googleMap.googleMap!);
    }
  }

  onMapInitialized(map: any) {
    this.map = map;
    this.initializeDrawingManager();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.center = this.currentLocation;
        this.zoom = 16; // Adjust zoom level as needed
        this.addCurrentLocationMarker(this.currentLocation);
      });
    } else {
      window.alert('Geolocation is not supported by this browser.');
    }
  }

  addCurrentLocationMarker(position: google.maps.LatLngLiteral) {
    if (this.googleMap && this.googleMap.googleMap) {
      // Add a circle to represent the accuracy radius
      new google.maps.Circle({
        strokeColor: '#4285F4',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#4285F4',
        fillOpacity: 0.35,
        map: this.googleMap.googleMap,
        center: position,
        radius: 100, // Set the radius as needed (in meters)
      });

      // Add a marker to represent the current location
      new google.maps.Marker({
        position,
        map: this.googleMap.googleMap,
        title: 'Your Location',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          fillColor: '#4285F4',
          fillOpacity: 1,
          strokeWeight: 1,
          strokeColor: 'white',
        },
      });
    }
  }

  addDestination() {
    if (this.destination.trim() !== '') {
      this.waypoints.push(this.destination);
      this.destination = '';
      this.calculateAndDisplayRoute();
    }
  }

  addDestinationFromParent(destination: string) {
    if (destination.trim() !== '') {
      this.waypoints.push(destination);
      this.destinationAdded.emit(destination);
      this.calculateAndDisplayRoute();
    }
  }

  calculateAndDisplayRoute() {
    if (!this.currentLocation || this.waypoints.length === 0) {
      return;
    }

    const waypts = this.waypoints.slice(0, -1).map((location) => ({
      location,
      stopover: true,
    }));

    this.directionsService.route(
      {
        origin: this.currentLocation,
        destination: this.waypoints[this.waypoints.length - 1],
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK && response) {
          this.directionsRenderer.setDirections(response);
          this.placeMarkers(response.routes[0].legs);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      },
    );
  }

  placeMarkers(legs: google.maps.DirectionsLeg[]) {
    const startMarkerImage = ICONS['startMarkerImage']; // Replace with your custom start marker image URL
    const endMarkerImage = ICONS['endMarkerImage']; // Replace with your custom end marker image URL

    // Clear existing markers if needed
    this.directionsRenderer.setOptions({ markerOptions: { visible: false } });

    // Place custom start marker
    new google.maps.Marker({
      position: legs[0].start_location,
      map: this.googleMap.googleMap,
      icon: startMarkerImage,
    });

    // Place custom end marker
    new google.maps.Marker({
      position: legs[legs.length - 1].end_location,
      map: this.googleMap.googleMap,
      icon: endMarkerImage,
    });
  }

  initializeDrawingManager() {
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: null, // Start with no drawing mode
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON],
      },
      polygonOptions: {
        editable: true,
        draggable: true,
        fillColor: '#E17575', // Set your polygon fill color
        strokeColor: '#E17575', // Set your polygon stroke color
      },
    });

    this.drawingManager.setMap(this.map);

    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event: google.maps.drawing.OverlayCompleteEvent) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          const path = (event.overlay as google.maps.Polygon).getPath();
          this.vertices = path.getArray().map((vertex: google.maps.LatLng) => ({
            lat: vertex.lat(),
            lng: vertex.lng(),
          }));
        }
        // Stop drawing mode after a polygon is created
        this.drawingManager.setDrawingMode(null);
      },
    );
  }

  startDrawingPolygon() {
    this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  }
}
