import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ICONS } from '../../../../../../_constants/constants';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ActivatedRoute, Router } from '@angular/router';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { LibMapsComponent } from 'nextsapien-component-lib';
import { LocationService } from '../../../../../../_services/location.service';
import { ItineraryDrawModeTransferService } from '../../../../../../_services/itinerary.drawmode.transfer';
const defaultIcon = 'assets/icons/map-markers-yellow.svg';
const selectedIcon = 'assets/icons/restu-icon-large.svg';

@Component({
  selector: 'lib-create-itinerary-draw-mode',
  templateUrl: './create-itinerary-draw-mode.component.html',
  styleUrl: './create-itinerary-draw-mode.component.css'
})
export class CreateItineraryDrawModeComponent {
  ICONS: Iicon = ICONS;
  actions: string[] = [ICONS['location'], ICONS['pencil'], ICONS['ban']];
  selected: string = this.actions[1];
  isOpen: boolean = true;
  itinerary!: Itinerary | undefined;
  @ViewChild('libMap') libMap!: LibMapsComponent;
  mapDrawn: boolean = false;

  polygon!: google.maps.Polygon;//The polygon rendered on map
  initialLocation = { lat: 24.8607, lng: 67.0011 };//Location of the user
  plottedMarkers: google.maps.Marker[] = [];//Plotted markers on the map
  selectedMarkers: google.maps.Marker[] = [];//Selected markers on the map
  placesResult!: google.maps.places.PlaceResult[];//Places result required for preview
  placeMarkers: {
    marker: google.maps.Marker,
    place: google.maps.places.PlaceResult
  }[] = [];

  //LIFE CYCLES
  constructor(
    private location: Location,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itineraryService: ItineraryService,
    private locationService: LocationService,
    private transferService: ItineraryDrawModeTransferService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.itinerary = this.itineraryService.getById(id);
    }
  }

  //UI LOGIC
  updateAction(action: string) {
    this.selected = action;
    if(action === this.actions[0]) {
      this.router.navigate([
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.CREATE_ITINERARY_ORIGIN,
        this.itinerary?.id
      ]);
    }
    if(action === this.actions[2]) {
      this.router.navigate([
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE,
        ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE_CREATE,
        this.itinerary?.id
      ]);
    }
  }

  showBottomModal(): void {
    this.isOpen = true;
    this.cdr.detectChanges();
  }

  searchRestaurantsInPolygon(
    polygonCoords:
      | Array<{
          lat: number;
          lng: number;
        }>
      | undefined,
  ) {
    if (polygonCoords) {
      this.mapDrawn = true;
      const bounds = new google.maps.LatLngBounds();
      polygonCoords.forEach((coord) => bounds.extend(coord));

      const service = new google.maps.places.PlacesService(
        this.libMap.map.googleMap!,
      );

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
            const filteredResults = results.filter((place) => {
              const location = place.geometry?.location;
              if (!location) return false;
              return google.maps.geometry.poly.containsLocation(location, this.polygon);
            });

            this.placesResult = filteredResults;
            filteredResults.forEach((place: google.maps.places.PlaceResult) => {
              this.addCustomMarker(place);
            });
            this.mapDrawn = true;
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

  clearMap() {
    this.mapDrawn = false;
    if(this.polygon) {
      this.polygon.setMap(null);
    }
    this.clearMarkers();
  }

  continue() {
    const coordinates: Array<{ lat: number; lng: number }> = [];
    this.polygon.getPath().forEach(coord => {
      coordinates.push({ lat: coord.lat(), lng: coord.lng() });
    });
    this.transferService.setPolygon(coordinates);

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
      ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE,
      ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE_PREVIEW,
      this.itinerary?.id
    ]);
  }

  clearPolygonIfExist() {
    if(this.polygon) {
      this.polygon.setMap(null);
    }
  }

  clearMarkers() {
    if(this.plottedMarkers?.length) {
      this.plottedMarkers?.forEach((plottedMarker) => plottedMarker.setMap(null));
    } 
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

        // Enable polygon drawing
        const drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.POLYGON,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.POLYGON],
          },
          polygonOptions: {
            strokeColor: '#E17575',
            strokeOpacity: 0,
            strokeWeight: 0,
            fillColor: '#E17575',
            fillOpacity: 0.3,
            clickable: true,
            editable: true,
            zIndex: 1,
          },
        });
        drawingManager.setMap(this.libMap.map.googleMap!);

        google.maps.event.addListener(drawingManager, 'drawingmode_changed', () => {
          const mode = drawingManager.getDrawingMode();
          if (mode === google.maps.drawing.OverlayType.POLYGON) {
            this.clearPolygonIfExist();
          }
        });

        // Listen for polygon completion
        google.maps.event.addListener(drawingManager, 'overlaycomplete', (event: google.maps.drawing.OverlayCompleteEvent) => {
          if (event.type === google.maps.drawing.OverlayType.POLYGON) {
            const polygon = event.overlay as google.maps.Polygon;
            this.polygon = polygon;
            // Disable drawing after one polygon
            drawingManager.setDrawingMode(null);

            // Access the polygon coordinates
            const path = polygon.getPath();
            const coordinates: Array<any> = [];
            path.forEach((coord: any) => {
              coordinates.push({ lat: coord.lat(), lng: coord.lng() });
            });

            this.searchRestaurantsInPolygon(coordinates);
          }
        });
    });
  }

  //NAVIGATIONS
  back(): void {
    this.location.back();
  }

  navToPickStartLocation() {
    this.router.navigate(
      [
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.LOCATION_PICKER,
        this.itinerary?.id,
      ],
      { queryParams: { mode: 'start' } },
    );
  }

  getClosestPointOnPolygon(polygon: google.maps.Polygon, point: google.maps.LatLng): google.maps.LatLng {
    const path = polygon.getPath();
    let closestPoint = null;
    let minDistance = Infinity;

    for (let i = 0; i < path.getLength(); i++) {
      const start = path.getAt(i);
      const end = path.getAt((i + 1) % path.getLength());

      // Interpolate points along the segment
      for (let t = 0; t <= 1; t += 0.05) {
        const interp = google.maps.geometry.spherical.interpolate(start, end, t);
        const dist = google.maps.geometry.spherical.computeDistanceBetween(point, interp);
        if (dist < minDistance) {
          minDistance = dist;
          closestPoint = interp;
        }
      }
    }

    return closestPoint!;
  }
}
