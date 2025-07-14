import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib';
import { MenuItem } from 'primeng/api';  
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { ICONS } from '../../../../_constants/constants';

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrl: './itinerary-detail.component.css',
})
export class ItineraryDetailComponent implements OnInit {
  @Input() itineraryTitle = 'Advance Tour';
  ICONS = ICONS;
  tabMenuItems: MenuItem[] = [
    {
      label: 'Summary',
      icon: 'pi pi-fw pi-home',
      routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_SUMMARY}`,
    },
    {
      label: 'Map',
      icon: 'pi pi-fw pi-map-marker',
      routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_MAP}`,
    },
    {
      label: 'Details',
      icon: 'pi pi-fw pi-user',
      routerLink: `${ItinerariesRoutesEnum.ITINERARY}/${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_MORE_DETAIL}`,
    },
  ];

  activeItem!: MenuItem;

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
      command: () => {
        this.isModalOpen = true;
      },
    },
  ];

  isModalOpen = false;

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activeItem = this.tabMenuItems.find(
      (x) => x.routerLink === this.router.url,
    )!;
  }

  onModalConfirmed() {
    this.isModalOpen = false;
  }

  onModalDismissed() {
    this.isModalOpen = false;
  }

  //NAVIGATIONS
  back() {
    this.location.back();
  }
  navToMembers() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY,
    ]);
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    this.router.navigate([event.routerLink]);
  }
}
