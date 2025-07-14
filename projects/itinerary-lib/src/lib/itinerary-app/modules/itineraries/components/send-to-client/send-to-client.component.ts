import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalService } from '../../../../_services/modal.service';
import { MatchingClients } from '../../../../_models/matching-clients';
import { ModalSendClientService } from '../../../../_services/modal.sendclient.service';
import { Itinerary } from '../../../../_models/Itinerary';
import { ItineraryService } from '../../../../_services/itinerary.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-send-to-client',
  templateUrl: './send-to-client.component.html',
  styleUrl: './send-to-client.component.css'
})
export class SendToClientComponent {
    clientsSelection: Array<MatchingClients> = [];

    @Input() itinerary!: Itinerary;

    constructor(
      public modalService: ModalService,
      public sendClientModalService: ModalSendClientService,
      public itineraryApiService: ItineraryService
    ) {}
  
    closeModal(): void {
      this.modalService.toggleModal = !this.modalService.toggleModal;
    }

    closeSendClientModal(): void {
      this.sendClientModalService.toggleModal = !this.sendClientModalService.toggleModal;
    }

    onClientSelectionChanged(clientsSelection: Array<MatchingClients>) {
      this.clientsSelection = clientsSelection;
    }

    submitSendClient(): void {
      this.itineraryApiService.sendItenaryToClients(this.itinerary, this.clientsSelection);
      this.closeSendClientModal();
    }
  
    onOk(): void {}
}
