import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';  
import { IFilterMenuOptions } from '../../../../_interface/filterMenuOptions';
import { Iicon } from '../../../../_interface/icon';
import { ApiService } from '../../../../_services/api.service';
import { ICONS } from '../../../../_constants/constants';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss',
})
export class FilterMenuComponent implements OnInit {
  @Input() cssClass!: string;
  @Output() onFilterClick: EventEmitter<void> = new EventEmitter<void>();
  ICONS: Iicon = ICONS;
  options: IFilterMenuOptions[] = [];
  filterControl = new FormControl();
  constructor(
    public apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.apiService
      .get('/assets/filterMenuOptionsData.json')
      .subscribe((data) => {
        this.options = data as IFilterMenuOptions[];
        this.cdr.detectChanges();
        this.filterControl.setValue(this.options[0].value);
      });
  }

  changeSelection(): void {}
  handleFilterClick = (): void => this.onFilterClick.emit();
}
