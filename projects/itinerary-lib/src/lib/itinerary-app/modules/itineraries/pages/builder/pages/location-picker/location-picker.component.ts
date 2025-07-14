import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationAutocompleteConfig, LocationModel } from 'nextsapien-component-lib';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrl: './location-picker.component.css',
})
export class LocationPickerComponent implements OnInit {
  locationIcon: string = ICONS['locationPink'];
  searchText: string = '';
  mode: string = '';
  autoCompleteConfig: LocationAutocompleteConfig = {
    types: ['(cities)'],
  };
  percentage: number = 10;
  itinerary: Itinerary | undefined;


  //LIFE CYCLES
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private itineraryService: ItineraryService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.mode = params['mode'];
      if (this.mode == 'end') {
        this.percentage = 20;
      }
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.itinerary = this.itineraryService.getById(id);
    }
  }

  //UI LOGIC
  onLocationChange(event: LocationModel | undefined) {
    if (!this.itinerary) return;

    if (this.mode === 'start') {
      this.itinerary.startLocation = event;
    } else if (this.mode === 'end') {
      this.itinerary.endLocation = event;
    }
    this.itineraryService.createOrUpdate(this.itinerary);
  }

  navToNextPage() {
    if (this.mode == 'start') {
      this.router.navigate([
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.CREATE_ITINERARY_DESTINATION,
        this.itinerary?.id,
      ]);
    } else if (this.mode == 'end') {
      this.router.navigate([
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.SUGGESTED_EVENTS_LOCATION,
        this.itinerary?.id,
      ]);
    }
  }

  back(): void {
    this.location.back();
  }
}
