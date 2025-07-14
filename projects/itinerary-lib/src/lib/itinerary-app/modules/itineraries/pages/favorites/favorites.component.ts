import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib'; 
import { CustomDropdownMenuService } from '../../../../_services/custom-dropdown-menu.service';
import { Iicon } from '../../../../_interface/icon';
import { ICONS } from '../../../../_constants/constants';
import { ItineraryService } from '../../../../_services/itinerary.service';
import { Itinerary } from '../../../../_models/Itinerary';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  cardList: number[] = [];
  ICONS: Iicon = ICONS;
  libMenuItems: Itinerary[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.itineraryService.getAllItinararies().subscribe((data) => {
      this.loading = false;
      this.libMenuItems = data;
      this.libMenuItem = this.customMenuList.getMenuList('favourite');
      this.cd.detectChanges();
    });
  }

  menuClicked(item: Itinerary) {
    console.log("Item", item);
  }

  constructor(
    public customMenuList: CustomDropdownMenuService,
    private itineraryService: ItineraryService,
    private cd: ChangeDetectorRef
  ) {}

  goFav(): void {
    this.cardList.push(1);
  }
}
