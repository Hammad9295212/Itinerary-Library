import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itinerary } from '../_models/Itinerary';

@Injectable({ providedIn: 'root' })
export class SharePopupDataService {
    private popupDataSubject = new BehaviorSubject<Itinerary | null>(null);
    popupData$: Observable<Itinerary | null>  = this.popupDataSubject.asObservable();

    setPopupData(data: Itinerary) {
        this.popupDataSubject.next(data);
    }

    clearPopupData() {
        this.popupDataSubject.next(null);
    }
}