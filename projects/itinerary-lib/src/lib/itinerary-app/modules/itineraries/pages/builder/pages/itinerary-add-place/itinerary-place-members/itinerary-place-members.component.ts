import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectOption } from 'nextsapien-component-lib';  
import { ItinerariesRoutesEnum } from '../../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../../_constants/constants';

@Component({
  selector: 'app-itinerary-place-members',
  templateUrl: './itinerary-place-members.component.html',
  styleUrl: './itinerary-place-members.component.css',
})
export class ItineraryPlaceMembersComponent implements OnInit {
  ICONS: Iicon = ICONS;
  itinerary: Itinerary | undefined;

  option: SelectOption<string> = {
    image: ICONS['food'],
    label: 'Viynasa',
    value: 'Viynasa',
    selected: true,
  };

  //UI LOGIC
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itineraryService: ItineraryService,
  ) {}

  ngOnInit(): void {
    const id = this.route.parent?.snapshot.params['id'];
    if (id) {
      this.itinerary = this.itineraryService.getById(id);
    }
  }

  //NAVIGATIONS
  navToUserSearch(): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATE_ITINERARY_USER_SEARCH,
      this.itinerary?.id,
    ]);
  }
}
