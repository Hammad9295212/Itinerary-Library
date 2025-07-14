import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-create-itinerary-start-location',
  templateUrl: './create-itinerary-start-location.component.html',
  styleUrl: './create-itinerary-start-location.component.css',
})
export class CreateItineraryStartLocationComponent implements OnInit {
  ICONS: Iicon = ICONS;
  actions: string[] = [ICONS['location'], ICONS['pencil'], ICONS['ban']];
  selected: string = this.actions[0];
  isOpen: boolean = true;
  initialLocation = { lat: 24.8607, lng: 67.0011 };
  itinerary!: Itinerary | undefined;
  // markers: MapMarkerModel[] = [
  //   {
  //     id: '1',
  //     position: { lat: 24.8607, lng: 67.0011 },
  //     radius: 0,
  //     icon: ICONS['enLocation'],
  //     omitMarkerCircle: true,
  //   },
  // ];

  //LIFE CYCLES
  constructor(
    private location: Location,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private itineraryService: ItineraryService,
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
    if(action === this.actions[1]) {
      this.router.navigate([
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE,
        ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE_CREATE,
        this.itinerary?.id,
      ]);
    }
    if(action === this.actions[2]) {
      this.router.navigate([
        ItinerariesRoutesEnum.ITINERARY,
        ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE,
        ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE_CREATE,
        this.itinerary?.id,
      ]);
    }
    
  }

  showBottomModal(): void {
    this.isOpen = true;
    this.cdr.detectChanges();
  }

  markerClick(_event: any) {
    // console.log('Event');
    // console.log(event);
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
}
