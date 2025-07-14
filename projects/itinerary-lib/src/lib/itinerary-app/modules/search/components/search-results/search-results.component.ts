import { Component, Input } from '@angular/core';
import { SearchResult } from '../../../../_interface/searchResults';
 
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  @Input() data!: SearchResult[];

  constructor() {}
}
