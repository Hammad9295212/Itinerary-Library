import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core'; 
import { Iicon } from '../../../../_interface/icon';
import { SearchResult } from '../../../../_interface/searchResults';
import { ApiService } from '../../../../_services/api.service';
import { ICONS } from '../../../../_constants/constants';
import { EditCompleteEvent, GridColumnChange, GridDataRequest} from 'nextsapien-component-lib';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FilterDataRequest, SelectOption } from 'nextsapien-component-lib';
import { Location } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';


// import { ItinerariesRoutesEnum } from '../../../../../_enums/ItenariesRoutes.enum';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.scss',
})
export class MainSearchComponent {
  ICONS: Iicon = ICONS;
  isSearching:boolean = false;
  searchTerm: string = '';

  data : SearchResult[] = [];
  filteredData: SearchResult[] = [];
  readonly defaultRowsPerPage: number = 10;
  readonly defaultRowPerPageOptions: number[] = [10, 25, 50];
  public searchString: string='';
  public selectedCategory = '';
  private componentDestroyed$: Subject<void> = new Subject();

  private searchStringSubject: Subject<string> = new Subject();
 
  @Input() enableSelection :boolean = true;
  @Input() enableGridFilters :boolean = true;
  @Input() enableCreate : boolean = false;
  @Input() enableRefresh : boolean = false;
  @Input() enableTrash :boolean = false;
  @Input() isLoading :boolean = false;
  @Input() totalRecords :number = 0;
  @Input() rowsPerPage :number = this.defaultRowsPerPage;
  @Input() first :number = 0;
  @Input() rowsPerPageOptions: number[] = this.defaultRowPerPageOptions;
  @Input() actionButtons: string[] = [];
  @Input() currencyDisplayCode: string = 'USD';
  @Input() minimumColumnWidth: number = -1;

 @Output() lazyLoad: EventEmitter<GridDataRequest> = new EventEmitter<GridDataRequest>();
  @Output() columnsChange: EventEmitter<GridColumnChange> = new EventEmitter<GridColumnChange>();
  @Output() editComplete: EventEmitter<EditCompleteEvent> = new EventEmitter<EditCompleteEvent>();
  @Output() editChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectAllPages: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() createClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() refreshData: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() showTrash: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() excludeItem: EventEmitter<(string | number)[]> = new EventEmitter<(string | number)[]>();
@Input() isEditInProgress :boolean = true;
@Input() excludedRows: any[] = [];
@Input() selectedRows: any[] = [];
// @Input() selectedRows: any[] = [];


// Optional: if using userFilter
@Output() userFilter = new EventEmitter<any>();
 filtersss: SelectOption<number>[] = [
    {
      label: 'Hello',
      value: 2,
      selected: true,
    },
  ];
  visibleComments: SafeHtml[] = [];
 
onSelectAllPages(event: boolean): void {
  this.selectAllPages.emit(event);
}
public emitTrashEvent(event: boolean): void {
    this.filteredData = [];
    this.excludedRows = [];
    this.showTrash.emit(event);
  }
// handleApplyFilter(event: any): void {
//   this.isLoading = false;
// }
  constructor(private apiService: ApiService ,
      private location: Location,
      private cdr: ChangeDetectorRef
  ) {
  }
  public emitCreateEvent(): void {
    this.createClicked.emit(true);
  }
 public emitRefreshEvent(): void {
    this.refreshData.emit(true);
  }
  
  ngOnInit() {
    // this.validateConfig();
    this.getData();

    this.searchStringSubject
      .asObservable()
      .pipe(debounceTime(500), distinctUntilChanged(), takeUntil(this.componentDestroyed$))
      .subscribe((searchString) => {
        this.searchString = searchString;
        this.first = 0;
        // this.emitLazyLoad();
      });
      
      // this.sanitizer.bypassSecurityTrustHtml(comment),
    
    // this.createMenuItems(!!this.groupByField);
    // this.emitGridMiscellaneousData();
  }
   userFilterList: FilterDataRequest[] = [
    {
      name: 'Filter by Name Ascending',
      projectGridFilterId: '123',
      collectionName: 'Employees',
      userFilters: [
        {
          publicFieldName: 'Name',
          operatorType: 'Contains',
          values: ['John'],
        },
      ],
      sort: {
        field: 'Name',
        direction: 'Ascending',
      },
      order: 1,
    },
    {
      name: 'Filter by Department and Salary Descending',
      projectGridFilterId: '456',
      collectionName: 'Employees',
      userFilters: [
        {
          publicFieldName: 'Department',
          operatorType: 'Equals',
          values: ['IT'],
        },
        {
          publicFieldName: 'Salary',
          operatorType: 'GreaterThan',
          values: [50000],
        },
      ],
      sort: {
        field: 'Salary',
        direction: 'Descending',
      },
      order: 2,
    },
  ];
  // private emitLazyLoad() {
  //   const request: GridDataRequest = {
  //     from: this.first,
  //     size: this.rowsPerPage,
  //     userFilters: this.userFilter,
  //     sortField: this.allColumns?.find((c) => c.name == this.sortField)?.defaultSortColumn ?? this.sortField,
  //     sortDirection: this.parsedSortOrder > 0 ? 'Ascending' : 'Descending',
  //     groupByField: this.allColumns?.find((c) => c.name == this.groupByField?.name)?.defaultSortColumn ?? this.groupByField?.name,
  //     searchString: this.searchString,
  //   };
  //   this.lazyLoad.emit(request);
  // }
  search(e: string): void {
    this.searchTerm = e.toLowerCase().trim();

    if (!this.searchTerm) {
      // this.visibleComments = this.comments.map((comment) =>
      //   this.sanitizer.bypassSecurityTrustHtml(comment),
      // );
      return;
    }

   

  

    
  }
  validateConfig() {
    throw new Error('Method not implemented.');
  }

  getData(): void {
    this.apiService.get('/assets/searchData.json').subscribe((data) => {
      this.data = data as SearchResult[];
    });
  }

  categorySelected(category: string) {
    this.selectedCategory = category;
    if(category) {
      this.filteredData = this.filteredData.filter((item) => {
        return item.section === category;
      });
      this.cdr.detectChanges();
    } else if(this.searchString) {
      this.filteredData = this.data.filter(item =>
        item.text.toLowerCase().startsWith(this.searchString.toLowerCase())
      );
      this.cdr.detectChanges();
    }
    
  }

  handleSearchStringChange($event: any) {
    this.searchString = $event;
    if ($event) {
      this.isSearching = true;
      this.filteredData = this.data.filter(item =>
        item.text.toLowerCase().startsWith($event.toLowerCase())
        && (this.selectedCategory ? (this.selectedCategory == item.section) : true)
      );
      this.cdr.detectChanges();
    } else {
      this.isSearching = false;
      this.filteredData = [];
      this.cdr.detectChanges();
    }
  }
 searchs(query: string): void {
    this.searchStringSubject.next(query);
  }


 
  //NAVIGATIONS
  navToBack = () => this.location.back();
  clear(): void {}
}
