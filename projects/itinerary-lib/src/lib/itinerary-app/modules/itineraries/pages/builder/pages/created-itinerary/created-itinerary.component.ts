import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'; 
import { ItinerariesRoutesEnum } from '../../../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../../../_interface/icon';
import { Itinerary } from '../../../../../../_models/Itinerary';
import { ItineraryService } from '../../../../../../_services/itinerary.service';
import { ICONS } from '../../../../../../_constants/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-created-itinerary',
  templateUrl: './created-itinerary.component.html',
  styleUrl: './created-itinerary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatedItineraryComponent implements OnInit {
  ICONS: Iicon = ICONS;
  isOpen: boolean = true;
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
  navToNextPage() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.CREATED_ITINERARY_PREVIEW,
      this.itinerary?.id,
    ]);
  }
  back(): void {
    this.location.back();
  }
}
