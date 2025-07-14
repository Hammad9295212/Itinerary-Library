import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AssetsService } from '../../_services/assets.service';
import { MatchingClients } from '../../_models/matching-clients';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'lib-matching-clients',
  templateUrl: './matching-clients.component.html',
  styleUrl: './matching-clients.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchingClientsComponent implements OnInit, OnDestroy {  
  loading: boolean = true;
  matches: Array<MatchingClients> = [];
  dynamicForm!: FormGroup;
  private formChangesSubscription!: Subscription;

  @Output() clientSelectionChanged: EventEmitter<Array<MatchingClients>> = new EventEmitter<Array<MatchingClients>>();

  constructor(
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder 
  ) {
  }

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      items: this.fb.array([]) // Initialize FormArray
    });
    this.assetService.getMatchingClients().subscribe((data) => {
      this.matches = data;
      this.loading = false;
      this.addCheckboxesToForm();
      this.subscribeToFormChanges();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
  }

  onSubmit() {
    return false;
  }

  private addCheckboxesToForm(): void {
    this.matches.forEach(() => {
      this.itemsFormArray.push(new FormControl(false));
    });
  }

  private subscribeToFormChanges(): void {
    this.formChangesSubscription = this.dynamicForm.valueChanges.subscribe(values => {
      const selectedClients: Array<MatchingClients> = [];
      values?.items?.forEach( (singleValue: boolean, index: number) => {
        if(singleValue) {
          selectedClients.push(this.matches[index]);
        }
      });
      this.clientSelectionChanged.emit(selectedClients);
    });
  }

  get itemsFormArray(): FormArray {
    return this.dynamicForm.get('items') as FormArray;
  }
}
