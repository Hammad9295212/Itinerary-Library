import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../../../_services/modal.service';
import { Iicon } from '../../../../_interface/icon'; 
import { ICONS } from '../../../../_constants/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-delete-itineraries',
  templateUrl: './delete-itineraries.component.html',
  styleUrl: './delete-itineraries.component.scss',
})
export class DeleteItinerariesComponent implements OnInit {
  @Output() deleteItineraryEvent: EventEmitter<string> = new EventEmitter<string>();
  ICONS: Iicon = ICONS;
  deleteForm!: FormGroup;
  showErrorMessage: boolean = false;

  constructor(
    public modalService: ModalService,
    private fb: FormBuilder
  ) {
    this.deleteForm = this.fb.group({
      confirmDelete: [false, Validators.required] // initial value unchecked
    });
  }

  closeModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  ngOnInit() {
    this.deleteForm.valueChanges.subscribe(() => {
      this.showErrorMessage = false;
    });
  }

  onOk(): void {}

  deleteItinerary(): void {
    if(!this.deleteForm.value.confirmDelete) {
      this.showErrorMessage = true;
    } else {
      this.deleteItineraryEvent.emit();
      this.modalService.toggleModal = false;
    }
  }
}
