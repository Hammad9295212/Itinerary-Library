import { Component, EventEmitter, Output } from '@angular/core';
import { ICONS } from '../../../../_constants/constants';
import { Iicon } from '../../../../_interface/icon';
import { ModalClearHistoryService } from '../../../../_services/modal.clearhistory.service';

@Component({
  selector: 'lib-clear-history-popup',
  templateUrl: './clear-history-popup.component.html',
  styleUrl: './clear-history-popup.component.css'
})
export class ClearHistoryPopupComponent {
  @Output() clearHistory: EventEmitter<void> = new EventEmitter<void>();
  ICONS: Iicon = ICONS;

  constructor(private clearHistoryModalService: ModalClearHistoryService) {

  }

  closeModal(): void {
    this.clearHistoryModalService.toggleModal = false;
  }

  deleteItinerary(): void {
    this.clearHistoryModalService.toggleModal = false;
    this.clearHistory.emit();
  }
}
