import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Iicon } from '../../../../_interface/icon';
import { ICONS } from '../../../../_constants/constants';
import { ModalClearHistoryService } from '../../../../_services/modal.clearhistory.service';
import { AssetsService } from '../../../../_services/assets.service';
 
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-serach-clear-history',
  templateUrl: './serach-clear-history.component.html',
  styleUrl: './serach-clear-history.component.scss',
})
export class SerachClearHistoryComponent {
  openModal: boolean = false;
  cssClasses = ['custom-modal-class'];
  ICONS: Iicon = ICONS;

  constructor(
    public readonly modalClearHistoryService: ModalClearHistoryService,
    public readonly assetService: AssetsService
  ) {
  }

  toggleModal(): void {
    // Add your custom CSS classes
    this.modalClearHistoryService.toggleModal = !this.modalClearHistoryService.toggleModal;
  }

  clearHistory(): void {
    this.assetService.clearSearchHistory();
  }
}
