import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Iicon } from '../../../../../../_interface/icon';
import { ICONS } from '../../../../../../_constants/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { LocationService } from '../../../../../../_services/location.service';
import { LibMapsComponent } from 'nextsapien-component-lib';
import { ItineraryDrawModeTransferService } from '../../../../../../_services/itinerary.drawmode.transfer';
import { IConditions } from '../../../../../../_interface/conditions';
const defaultIcon = 'assets/icons/map-markers-yellow.svg';
const selectedIcon = 'assets/icons/restu-icon-large.svg';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-create-itinerary-no-visual-filter',
  templateUrl: './create-itinerary-no-visual-filter.component.html',
  styleUrl: './create-itinerary-no-visual-filter.component.css'
})
export class CreateItineraryNoVisualFilterComponent implements OnInit, AfterViewInit {
  ICONS: Iicon = ICONS;
  isOpen = true;
  actions: string[] = [ICONS['location'], ICONS['pencil'], ICONS['ban']];
  selected: string = this.actions[2];
  itinerary!: Itinerary | undefined;
  @ViewChild('libMap') libMap!: LibMapsComponent;
  initialLocation = { lat: 24.8607, lng: 67.0011 };
  selectedMarkers: google.maps.Marker[] = [];
  placeMarkers: {
    marker: google.maps.Marker,
    place: google.maps.places.PlaceResult
  }[] = [];
  openFilters: boolean = false;
  plottedMarkers: google.maps.Marker[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itineraryService: ItineraryService,
    private locationService: LocationService,
    private cdr: ChangeDetectorRef,
    private transferService: ItineraryDrawModeTransferService
  ) {

  }

  searchRestaurantsInView() {
    const map = this.libMap.map.googleMap!;
    if (map) {
      const bounds = map.getBounds(); // Get current visible area
      if (!bounds) return;

      const service = new google.maps.places.PlacesService(map);

      service.nearbySearch(
        {
          bounds: bounds,
          type: 'restaurant',
        },
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus,
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            results.forEach((place: google.maps.places.PlaceResult) => {
              this.addCustomMarker(place);
            });
          }
        },
      );
    }
  }

  addCustomMarker(place: google.maps.places.PlaceResult) {
    const marker = new google.maps.Marker({
      map: this.libMap.map.googleMap,
      position: place.geometry?.location,
      title: place.name,
      icon: {
        url: 'assets/icons/map-markers-yellow.svg',
      },
    });
    this.plottedMarkers.push(marker);
    this.placeMarkers.push({
      place: place,
      marker: marker
    });
    marker.addListener('click', () => {
      // Toggle selection
      const index = this.selectedMarkers.indexOf(marker);

      if (index > -1) {
        // Marker was already selected → deselect
        marker.setIcon(defaultIcon);
        this.selectedMarkers.splice(index, 1);
      } else {
        // Select marker
        marker.setIcon(selectedIcon);
        this.selectedMarkers.push(marker);
      }
    });
  }

  continueBuilding() {
    const selectedPlaces = this.selectedMarkers.map((selectedMarker) => {
      const placeMarker = this.placeMarkers.find(placeMarker => placeMarker.marker === selectedMarker);
      return placeMarker!.place;
    });
    const allPlaces = this.placeMarkers.map(placeMarker => placeMarker.place);
    this.transferService.setPlaces(allPlaces);
    this.transferService.setSelectedPlaces(selectedPlaces);
    this.transferService.setCurrentLocation(this.initialLocation);

    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE,
      ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE_PREVIEW,
      this.itinerary?.id
    ]);
  }

  ngAfterViewInit() {
      this.locationService.getCurrentLocation()
      .subscribe((location) => {
        this.libMap.map.googleMap?.setCenter({
          lat: location.lat,
          lng: location.long
        });

        //Set the initial location of the user
        this.initialLocation = {
          lat: location.lat,
          lng: location.long
        }
        this.libMap.map.googleMap?.setZoom(15);

        //Add marker for user position
        new google.maps.Marker({
          map: this.libMap.map.googleMap,
          position: {
            lat: location.lat,
            lng: location.long
          },
          title: 'You are here',
          icon: {
            url: 'assets/current_location.svg',
            scaledSize: new google.maps.Size(40, 40),
          },
        });

        this.searchRestaurantsInView();
      });
  }

  showBottomModal(): void {
    this.isOpen = true;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.itinerary = this.itineraryService.getById(id);
    }
  }

  toggleFilter() {
    this.openFilters = !this.openFilters;
  }

  onPresetsChanged(conditions: IConditions[]) {
    this.filterPlacesInView(conditions);
  }

  onbackButtonClicked() {
    this.toggleFilter();
  }

  updateAction(action: string) {
      this.selected = action;
      if(action === this.actions[0]) {
        this.router.navigate([
          ItinerariesRoutesEnum.ITINERARY,
          ItinerariesRoutesEnum.CREATE_ITINERARY_ORIGIN,
          this.itinerary?.id
        ]);
      }
      if(action === this.actions[1]) {
        this.router.navigate([
          ItinerariesRoutesEnum.ITINERARY,
          ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE,
          ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE_CREATE,
          this.itinerary?.id,
        ]);
      }
    }

  filterPlacesInView(filters: IConditions[]) {
  const map = this.libMap.map.googleMap!;
    if (map) {
      const bounds = map.getBounds(); // Get current visible area
      if (!bounds) return;

      const service = new google.maps.places.PlacesService(map);

      // Extract values from filters
      let typeFilter: string | boolean;
      let openNowFilter: boolean | undefined;
      let ratingFilter: number | undefined;

      filters.forEach((filter: IConditions) => {
        if (filter.field === 'type') {
          typeFilter = filter.condition;
        } else if (filter.field === 'open_now') {
          openNowFilter = filter.condition === 'true';
        } else if (filter.field === 'rating') {
          const match = (filter.condition as string).match(/>=\s*(\d+(?:\.\d+)?)/);
          if (match) {
            ratingFilter = parseFloat(match[1]);
          }
        }
      });

      service.nearbySearch(
        {
          bounds: bounds,
          type: typeFilter! as string, // e.g. 'restaurant'
          openNow: openNowFilter, // true or false
        },
        (
          results: google.maps.places.PlaceResult[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            const filtered = ratingFilter
              ? results.filter(place => {
                  const rating = place.rating ?? 0;
                  return rating >= ratingFilter!;
                })
              : results;
            if(this.plottedMarkers.length) {
              this.plottedMarkers.forEach((marker) => {
                marker.setMap(null);
              });
            }
            this.selectedMarkers = [];
            filtered.forEach(place => {
              this.addCustomMarker(place);
            });
          }
        }
      );
    }
  }
}
