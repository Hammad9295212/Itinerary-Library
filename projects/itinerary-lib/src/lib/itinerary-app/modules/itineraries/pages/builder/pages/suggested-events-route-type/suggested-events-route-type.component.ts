import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectOption } from 'nextsapien-component-lib'; 
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-suggested-events-route-type',
  templateUrl: './suggested-events-route-type.component.html',
  styleUrl: './suggested-events-route-type.component.css',
})
export class SuggestedEventsRouteTypeComponent implements OnInit {
  ICONS: Iicon = ICONS;
  isOpen: boolean = true;
  itineary: Itinerary | undefined;

  recommendedRouteTypes: SelectOption<string>[][] = [
    [{ label: 'City scenic', value: 'city-scenic' }],
    [{ label: 'Nature scenic', value: 'nature-scenic' }],
  ];

  moreRouteTypes: SelectOption<string>[][] = [
    [{ label: 'Containes historic places', value: 'contains-historic-places' }],
    [{ label: 'Avoid traffic', value: 'avoid-traffic' }],
    [
      {
        label: 'Route Modifier Placeholder',
        value: 'route-modifier-placeholder',
      },
    ],
  ];

  //LIFE CYCLE
  constructor(
    private location: Location,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private itineraryService: ItineraryService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.itineary = this.itineraryService.getById(id);
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
      ItinerariesRoutesEnum.SUGGESTED_EVENTS_ROUTE_RADIUS,
      this.itineary?.id,
    ]);
  }
  back(): void {
    this.location.back();
  }
}
