import { Injectable } from "@angular/core";
import { Itinerary } from "../_models/Itinerary";
import { MatchingClients } from "../_models/matching-clients";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ItineraryService {
  constructor(private http: HttpClient) {

  }

  private _itineraries: Itinerary[] = [];

  getAll(): Itinerary[] {
    return this._itineraries;
  }

  getById(id: string): Itinerary | undefined {
    return this._itineraries.find(itinerary => itinerary.id === id);
  }

  createOrUpdate(itinerary: Itinerary): void {
    const index = this._itineraries.findIndex(i => i.id === itinerary.id);
    if (index !== -1) {
      this._itineraries[index] = itinerary;
    } else {
      this._itineraries.push(itinerary);
    }
  }

  sendItenaryToClients(itinerary: Itinerary, clients: MatchingClients[]): {
    itinerary: Itinerary,
    clients: MatchingClients[]
  } {
    return {
      itinerary,
      clients
    };
  }

  getItinerariesByUserId(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>('/assets/itineraries.json').pipe(delay(1000));
  }

  getAllItinararies(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>('/assets/itineraries.json').pipe(delay(1000));
  }

  getArchivedItinerariesByUserId(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>('/assets/itinerariesArchived.json').pipe(delay(1000));
  }

  deleteItineraryArchived(): boolean {
    return true;
  }

  deleteItinerary(id: string): Observable<Itinerary[]> {
    console.log("Delete id", id);
    return this.http.get<Itinerary[]>('/assets/itinerariesArchived.json').pipe(delay(1000));
  }
}
