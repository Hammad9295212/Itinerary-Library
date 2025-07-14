import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItineraryDrawModeTransferService {
  polygonCoords: Array<{ lat: number; lng: number }> = [];
  places: google.maps.places.PlaceResult[] = [];
  selectedPlaces: google.maps.places.PlaceResult[] = [];
  location!: { lat: number, lng: number };

  setPolygon(coords: { lat: number; lng: number }[]) {
    this.polygonCoords = coords;
  }

  setPlaces(places: google.maps.places.PlaceResult[]) {
    this.places = places;
  }

  setSelectedPlaces(places: google.maps.places.PlaceResult[]) {
    this.selectedPlaces = places;
  }

  setCurrentLocation(location: { lat: number, lng: number }) {
    this.location = location;
  }

  clear() {
    this.polygonCoords = [];
    this.selectedPlaces = [];
    this.places = [];
  }
}
