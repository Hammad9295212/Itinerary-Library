import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  getCurrentLocation(): Observable<{ lat: number; long: number }> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });
            observer.complete();
          },
          (error) => {
            observer.error(`Geolocation error: ${error.message}`);
          },
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }
}
