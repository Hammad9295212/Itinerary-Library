import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FilterDataRequest, SelectOption } from 'nextsapien-component-lib';
import { Iicon } from '../../../../../_interface/icon';
import { ItinerariesRoutesEnum } from '../../../../../_enums/ItenariesRoutes.enum';
import { ICONS } from '../../../../../_constants/constants';

@Component({
  selector: 'app-comment-search',
  templateUrl: './comment-search.component.html',
  styleUrls: ['./comment-search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentSearchComponent implements OnInit {
  ICONS : Iicon = ICONS;
  searchTerm: string = '';
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

  visibleComments: SafeHtml[] = [];
  private comments: string[] = [
    "I had a great experience out there. I would say it's perfect for a coffee lover.",
    'Loving the great ideas here, yet it’s time for me to step out.',
    'It’s been a great exchange of ideas, but I’ve reached my limit—peace out!',
    'Absolutely loved the vibe of this place! Can’t wait to visit again.',
    'The discussions here are top-notch. Keep up the great work, everyone!',
    'Such a refreshing perspective! This place never fails to inspire me.',
    "I'm learning so much from everyone here—thank you all!",
    'This is exactly the kind of place I was looking for. So insightful!',
    'Had an amazing time here, but I need to wrap up for now. Until next time!',
    'Great energy and discussions! Looking forward to more in the future.',
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.visibleComments = this.comments.map((comment) =>
      this.sanitizer.bypassSecurityTrustHtml(comment),
    );
  }

  search(e: string): void {
    this.searchTerm = e.toLowerCase().trim();

    if (!this.searchTerm) {
      this.visibleComments = this.comments.map((comment) =>
        this.sanitizer.bypassSecurityTrustHtml(comment),
      );
      return;
    }

    const words = this.searchTerm.split(/\s+/).filter(Boolean);

    const filteredComments = this.comments.filter((comment) =>
      words.every((word) => comment.toLowerCase().includes(word)),
    );

    const combinedRegex = new RegExp(
      `(${words.map((word) => this.escapeRegExp(word)).join('|')})`,
      'gi',
    );

    this.visibleComments = filteredComments.map((comment) => {
      const highlightedText = comment.replace(
        combinedRegex,
        `<span class="highlight">$1</span>`,
      );
      return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
    });
  }

  private escapeRegExp(text: string): string {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  viewReplies(_comment: any) {
    this.router.navigate([ItinerariesRoutesEnum.ITINERARY, ItinerariesRoutesEnum.COMMENT_REPLIES])
  }
  //NAVIGATIONS
  navToBack = () => this.location.back();
}
