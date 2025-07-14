import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib';
import { MenuItem } from 'primeng/api';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-created-itinerary-preview',
  templateUrl: './created-itinerary-preview.component.html',
  styleUrl: './created-itinerary-preview.component.css',
})
export class CreatedItineraryPreviewComponent implements OnInit {
  ICONS = ICONS;
  activeItem!: MenuItem;
  itinerary: Itinerary | undefined;
  dropdownMenuItems: LibMenuItem[] = [
    {
      title: 'Edit Itinerary',
      iconUrl: ICONS['edit'],
    },
    {
      title: 'Archive',
      iconUrl: ICONS['archiveWhite'],
    },
    {
      title: 'Add to Favorites',
      iconUrl: ICONS['favorite'],
    },
    {
      title: 'Share Itinerary',
      iconUrl: ICONS['share'],
    },
    {
      title: 'Report',
      iconUrl: ICONS['report'],
    },
    {
      title: 'Delete Itinerary',
      iconUrl: ICONS['delete'],
      command: () => {},
    },
  ];

  tabMenuItems: MenuItem[] = [];

  //LIFE CYCLES
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private itineraryService: ItineraryService,
  ) {}

  ngOnInit(): void {
    this.activeItem = this.tabMenuItems.find(
      (x) => x.routerLink === this.router.url,
    )!;

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.itinerary = this.itineraryService.getById(id);
    }

    this.tabMenuItems = [
      {
        label: 'Summary',
        icon: 'pi pi-fw pi-home',
        routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.CREATED_ITINERARY_PREVIEW}/${id}/${ItinerariesRoutesEnum.CREATED_ITINERARY_DETAIL}`,
      },
      {
        label: 'Map',
        icon: 'pi pi-fw pi-map-marker',
        routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.CREATED_ITINERARY_PREVIEW}/${id}/${ItinerariesRoutesEnum.CREATED_ITINERARY_MAP}`,
      },
    ];
  }

  //NAVIGATIONS
  navToNextPage() {
    this.router.navigate([ItinerariesRoutesEnum.ITINERARY]);
  }

  back(): void {
    this.location.back();
  }
}
