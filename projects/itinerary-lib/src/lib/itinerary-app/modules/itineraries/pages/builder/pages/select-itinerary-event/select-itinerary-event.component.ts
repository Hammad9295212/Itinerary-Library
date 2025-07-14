import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectOption } from 'nextsapien-component-lib';  
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-select-itinerary-event',
  templateUrl: './select-itinerary-event.component.html',
  styleUrl: './select-itinerary-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectItineraryEventComponent implements OnInit {
  ICONS: Iicon = ICONS;
  isOpen: boolean = true;
  options: SelectOption<string>[] = [
    {
      label: 'All',
      value: 'All',
      selected: true,
    },
    {
      label: 'My Interests',
      value: 'My Interests',
      selected: true,
    },
    {
      label: 'Popular',
      value: 'Popular',
      selected: true,
    },
  ];
  itinerary: Itinerary | undefined;

  //LIFE CYCLE
  constructor(
    private location: Location,
    private router: Router,
    private cdr: ChangeDetectorRef,
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
    this.cdr.detectChanges();
  }

  //NAVIGATIONS
  back(): void {
    this.location.back();
  }

  navToNextPage() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.SELECT_ITINERARY_ADD_PLACE,
      this.itinerary?.id,
    ]);
  }
}
