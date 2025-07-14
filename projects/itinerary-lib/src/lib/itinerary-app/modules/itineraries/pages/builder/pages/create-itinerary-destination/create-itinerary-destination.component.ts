import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-create-itinerary-destination',
  templateUrl: './create-itinerary-destination.component.html',
  styleUrl: './create-itinerary-destination.component.css',
})
export class CreateItineraryDestinationComponent implements OnInit {
  ICONS: Iicon = ICONS;
  isOpen: boolean = true;
  itinerary: Itinerary | undefined;

  //LIFE CYCLE
  constructor(
    private location: Location,
    private router: Router,
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
  }

  //NAVIGATIONS
  navToPickStartLocation() {
    this.router.navigate(
      [
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.LOCATION_PICKER,
        this.itinerary?.id,
      ],
      { queryParams: { mode: 'end' } },
    );
  }

  back(): void {
    this.location.back();
  }
}
