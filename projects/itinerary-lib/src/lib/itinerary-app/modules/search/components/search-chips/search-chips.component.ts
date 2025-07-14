import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iicon } from '../../../../_interface/icon'; 
import { ICONS } from '../../../../_constants/constants';
import { TranslateService } from '@ngx-translate/core';
 
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-chips',
  templateUrl: './search-chips.component.html',
  styleUrl: './search-chips.component.scss',
})
export class SearchChipsComponent implements OnInit {
  ICONS: Iicon = ICONS;
  chipItems: Array<{
    label: string;
    selected: boolean;
    value: string;
    show: boolean;
  }> = [];
  chipSelected: boolean = false;

  @Output() chipItemSelected: EventEmitter<string> = new EventEmitter<string>();

  onSelectionChanged($event: boolean, value: string) {
    this.chipItems = this.chipItems.map((chipItem) => {
      if($event) {
        this.chipSelected = true;
        if(chipItem.value === value) {
          this.chipItemSelected.emit(chipItem.value);
          chipItem.selected = true;
        } else {
          chipItem.show = false;
        }
      } else if(!$event) {
        this.chipSelected = false;
        this.chipItemSelected.emit("");
        chipItem.selected = false;
        chipItem.show = true;
      }
      return chipItem;
    });
    this.cd.detectChanges();
  }

  initializeChips() {
    this.chipItems = [{
      label: this.ts.instant("SIDEBAR.ITINERARIES"),
      selected: false,
      value: 'Itineraries',
      show: true
    },{
      label: this.ts.instant("MATCHES"),
      selected: false,
      value: 'Matcher',
      show: true
    },{
      label: this.ts.instant("MY_CREATION"),
      selected: false,
      value: 'My_creation',
      show: true
    }];
    this.cd.detectChanges();
  }

  ngOnInit() {
    this.initializeChips();
  }

  constructor(
    private readonly ts: TranslateService,
    private cd: ChangeDetectorRef
  ) {
    
  }
}
