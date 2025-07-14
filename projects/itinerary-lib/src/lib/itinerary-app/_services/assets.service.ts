import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { INotification } from '../_interface/notification';
import { ISearchPopup } from '../_interface/search-popup';
import { IItineraryMember } from '../_models/itineraryMember';
import { MatchingClients } from '../_models/matching-clients';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(private http: HttpClient) {}

  getMembers(): Observable<IItineraryMember[]> {
    return this.http.get<IItineraryMember[]>('/assets/totalMembers.json');
  }

  getGlobalSearch(): Observable<ISearchPopup[]> { 
    return this.http.get<ISearchPopup[]>('/assets/globalSearch.json');
  }

  getNotifications(): Observable<INotification[]> {
    return this.http.get<INotification[]>('/assets/notifications.json');
  }

  getTranslation(fileName: 'en' | 'es' | 'fr'): Observable<any> {
    return this.http.get(`/assets/i18n/${fileName}.json`);
  }

  getMatchingClients(): Observable<MatchingClients[]> {
    return this.http.get<MatchingClients[]>('/assets/matchingClients.json');
  }

  clearSearchHistory(): Observable<void> {
    return this.http.delete<void>('/assets/matchingClients.json', {});
  }
}
