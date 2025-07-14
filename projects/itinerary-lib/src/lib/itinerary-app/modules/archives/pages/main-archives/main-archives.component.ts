import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LibMenuItem } from 'nextsapien-component-lib'; 
import { CustomDropdownMenuService } from '../../../../_services/custom-dropdown-menu.service';
import { ModalService } from '../../../../_services/modal.service';
import { Iicon } from '../../../../_interface/icon'; 
import { ICONS } from '../../../../_constants/constants';
import { Router } from '@angular/router';
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { ItineraryService } from '../../../../_services/itinerary.service';
import { Itinerary } from '../../../../_models/Itinerary';
import { Location } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-archives',
  templateUrl: './main-archives.component.html',
  styleUrl: './main-archives.component.scss',
})
export class MainArchivesComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  itineraries: Itinerary[] = [];
  ICONS: Iicon = ICONS;
  selectedItem!: Itinerary;
  loading: boolean = true;

  ngOnInit(): void {
    this.itineraryService.getArchivedItinerariesByUserId().subscribe((data: Itinerary[]) => {
      this.itineraries = data;
      this.loading = false;
      this.cd.detectChanges();
    });
    this.libMenuItem = this.customMenuList.getMenuList('archives');
  }

  menuClicked(event: Itinerary): void {
    this.selectedItem = event;
  }

  backButtonClick(): void {
    this.location.back();
  }

  buttonClicked(): void {
    this.itineraryService.deleteItineraryArchived();
  }

  deleteItinerary() {
    this.itineraryService.deleteItinerary(this.selectedItem.id).subscribe(() => {
      this.itineraries = this.itineraries.filter((itinerary) => itinerary.id !== this.selectedItem.id);
      this.cd.detectChanges();
    });
  }

  searchButtonClick(): void {
    this.router.navigate([ItinerariesRoutesEnum.SEARCH]).then((_r) => {});
  }

  constructor(
    public customMenuList: CustomDropdownMenuService,
    public modalService: ModalService,
    public translate: TranslateService,
    private readonly router: Router,
    private cd: ChangeDetectorRef,
    private readonly itineraryService: ItineraryService,
    private location: Location
  ) {}
}
