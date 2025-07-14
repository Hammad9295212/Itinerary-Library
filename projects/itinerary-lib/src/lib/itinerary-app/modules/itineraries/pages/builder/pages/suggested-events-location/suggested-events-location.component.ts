import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';
import { LibMapsComponent, MapMarkerModel } from 'nextsapien-component-lib';

@Component({
  selector: 'app-suggested-events-location',
  templateUrl: './suggested-events-location.component.html',
  styleUrl: './suggested-events-location.component.css',
})
export class SuggestedEventsLocationComponent implements OnInit {
  ICONS: Iicon = ICONS;
  isOpen: boolean = true;
  itineary: Itinerary | undefined;
  mapMarkerModel: MapMarkerModel[] = [];
  @ViewChild('libMap') libMap!: LibMapsComponent;

  //LIFE CYCLE
  constructor(
    private location: Location,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private itineraryService: ItineraryService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.itineary = this.itineraryService.getById(id);

      const [startlng, startLat] = this.itineary?.startLocation?.coordinates!;
      this.mapMarkerModel.push({
        id: '1',
        position: { lat: startLat, lng: startlng },
        radius: 1000,
        icon: this.ICONS['startLocation'],
        omitMarkerCircle: true
      });

      const [endlng, endLat] = this.itineary?.endLocation?.coordinates!;
      this.mapMarkerModel.push({
        id: '2',
        position: { lat: endLat, lng: endlng },
        radius: 1000,
        icon: this.ICONS['enLocation'],
        omitMarkerCircle: true
      });

      setTimeout(() => {
        if (this.libMap) {
          const bounds = new google.maps.LatLngBounds();
          bounds.extend(new google.maps.LatLng(startLat, startlng));
          bounds.extend(new google.maps.LatLng(endLat, endlng));
          this.libMap.map.fitBounds(bounds);
        }
      });
    }
  }

  //UI LOGIC
  showBottomModal(): void {
    this.isOpen = true;
    this.cdr.detectChanges();
  }

  //NAVIGATIONS
  navToNextPage() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.SUGGESTED_EVENTS_ROUTE_TYPE,
      this.itineary?.id,
    ]);
  }
  back(): void {
    this.location.back();
  }
}