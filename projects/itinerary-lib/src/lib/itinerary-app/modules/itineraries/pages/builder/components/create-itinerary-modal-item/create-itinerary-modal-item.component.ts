import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';  
import { Iicon } from '../../../../../../_interface/icon';
import { ModalService } from '../../../../../../_services/modal.service';
import { ICONS } from '../../../../../../_constants/constants';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-itinerary-modal-item',
  templateUrl: './create-itinerary-modal-item.component.html',
  styleUrl: './create-itinerary-modal-item.component.scss',
})
export class CreateItineraryModalItemComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<void>();
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() shortTitle!: boolean;
  titleList: string[] = [];
  ICONS: Iicon = ICONS;

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.titleList = !this.shortTitle ? this.title.split(',') : [this.title];
    this.modalService.bottomToggleModal = false;
  }

  clickEventEmitter(): void {
    this.clickEvent.emit();
  }

  backButton(): void {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
  }
}
