import { Component } from '@angular/core';
import { FilterDataRequest, SelectOption } from 'nextsapien-component-lib';
import { ICONS } from '../../../../_constants/constants';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrl: './advanced-filters.component.css'
})
export class AdvancedFiltersComponent {

  ICONS = ICONS;

  filtersss: SelectOption<number>[] = [
    {
      label: 'Hello',
      value: 2,
      selected: true,
    },
  ];

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

      search(_e: string): void {
    // this.searchTerm = e.toLowerCase().trim();

    // if (!this.searchTerm) {
    //   this.visibleComments = this.comments.map((comment) =>
    //     this.sanitizer.bypassSecurityTrustHtml(comment),
    //   );
    //   return;
    // }

    // const words = this.searchTerm.split(/\s+/).filter(Boolean);

    // const filteredComments = this.comments.filter((comment) =>
    //   words.every((word) => comment.toLowerCase().includes(word)),
    // );

    // const combinedRegex = new RegExp(
    //   `(${words.map((word) => this.escapeRegExp(word)).join('|')})`,
    //   'gi',
    // );

    // this.visibleComments = filteredComments.map((comment) => {
    //   const highlightedText = comment.replace(
    //     combinedRegex,
    //     `<span class="highlight">$1</span>`,
    //   );
    //   return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
    // });
  }

  back(){
    window.history.back();
  }
}
