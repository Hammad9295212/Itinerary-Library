import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { ModalService } from '../../_services/modal.service';
import { ItinerariesRoutesEnum } from '../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../_interface/icon';
import { ICONS } from '../../_constants/constants';
import { ModalShareUrlClientService } from '../../_services/modal.shareurlservice';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  templateUrl: './itineraries.component.html',
  styleUrl: './itineraries.component.scss',
})
export class ItinerariesComponent {
  ICONS: Iicon = ICONS;

  constructor(
    public router: Router,
    public modalService: ModalService,
    public shareModalService: ModalShareUrlClientService
  ) {}

  backButtonClick(): void {
    window.history.back();
  }

  searchButtonClick(): void {
    this.router.navigate([ItinerariesRoutesEnum.SEARCH]).then((_r) => {});
  }

  closeUrlShareModal() {
    this.shareModalService.toggleModal = !this.shareModalService.toggleModal;
  }

  copyButtonClicked() {
    navigator.clipboard.writeText(
      window.location.origin + ItinerariesRoutesEnum.ITINERARY
      + '/' + ItinerariesRoutesEnum.ITINERARY_DETAIL);
  }
}
