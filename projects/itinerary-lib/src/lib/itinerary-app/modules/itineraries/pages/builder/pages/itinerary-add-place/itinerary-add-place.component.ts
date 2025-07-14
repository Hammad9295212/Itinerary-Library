import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-itinerary-add-place',
  templateUrl: './itinerary-add-place.component.html',
  styleUrl: './itinerary-add-place.component.css',
})
export class ItineraryAddPlaceComponent implements OnInit {
  itinerary: Itinerary | undefined;
  isOpen: boolean = true;
  ICONS: Iicon = ICONS;
  tabMenuItems: MenuItem[] = [];

  //LIFE CYCLES
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private itineraryService: ItineraryService,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.itinerary = this.itineraryService.getById(id);
    }
    this.tabMenuItems = [
      {
        label: 'Basic Info',
        icon: 'pi pi-fw pi-home',
        routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.SELECT_ITINERARY_ADD_PLACE}/${id}/${ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_BASIC_INFO}`,
      },
      {
        label: 'Date & Time',
        icon: 'pi pi-fw pi-map-marker',
        routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.SELECT_ITINERARY_ADD_PLACE}/${id}/${ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_DATETIME}`,
      },
      {
        label: 'Members',
        icon: 'pi pi-fw pi-user',
        routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.SELECT_ITINERARY_ADD_PLACE}/${id}/${ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_MEMBERS}`,
      },
    ];
  }

  //UI LOGIC
  showBottomModal(): void {
    this.isOpen = true;
  }

  //NAVIGATIONS
  navToNextPage() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATED_ITINERARY,
      this.itinerary?.id,
    ]);
  }
  back(): void {
    this.location.back();
  }
}
