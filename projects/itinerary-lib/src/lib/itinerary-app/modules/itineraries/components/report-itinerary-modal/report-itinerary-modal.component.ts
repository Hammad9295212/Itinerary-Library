import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormFieldType } from 'nextsapien-component-lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'; 
import { ModalService } from '../../../../_services/modal.service';
import { IReportOptions } from '../../../../_interface/reportOptions';
import { ApiService } from '../../../../_services/api.service';
import { ConstantsService } from '../../../../_services/constants.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-report-itinerary-modal',
  templateUrl: './report-itinerary-modal.component.html',
  styleUrls: ['./report-itinerary-modal.component.scss'],
})
export class ReportItineraryModalComponent implements OnInit, OnDestroy {
  @Input() popupTitle!: string;
  selectedItem: number | undefined;
  radio: FormControl = new FormControl(0);
  options: IReportOptions[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public constantService: ConstantsService,
    public modalService: ModalService,
    public apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  radioChecked(): void {
    if (this.radio.value === this.constantService.SPECIAL_VALUE) {
      this.selectedItem = this.constantService.SPECIAL_VALUE;
    } else {
      this.selectedItem = 0;
    }
  }

  ngOnInit(): void {
    this.apiService
      .get<IReportOptions[]>('/assets/reportsOptionsData.json')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: IReportOptions[]) => {
        this.options = data;
        this.cdr.detectChanges();
      });

    this.radio.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((e: number | null) => {
        this.selectedItem =
          e === this.constantService.SPECIAL_VALUE
            ? this.constantService.SPECIAL_VALUE
            : 0;
      });
    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  closeModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  onOk(): void {}

  protected readonly FormFieldType = FormFieldType;
}
