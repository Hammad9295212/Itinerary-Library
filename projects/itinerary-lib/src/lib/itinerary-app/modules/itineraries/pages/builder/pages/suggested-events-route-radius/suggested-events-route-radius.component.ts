import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-suggested-events-route-radius',
  templateUrl: './suggested-events-route-radius.component.html',
  styleUrl: './suggested-events-route-radius.component.css',
})
export class SuggestedEventsRouteRadiusComponent implements OnInit {
  isOpen: boolean = true;
  ICONS: Iicon = ICONS;
  itinerary: Itinerary | undefined;

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
      this.itinerary = this.itineraryService.getById(id);
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
      ItinerariesRoutesEnum.SELECT_ITINERARY_EVENTS,
      this.itinerary?.id,
    ]);
  }
  back(): void {
    this.location.back();
  }
}
