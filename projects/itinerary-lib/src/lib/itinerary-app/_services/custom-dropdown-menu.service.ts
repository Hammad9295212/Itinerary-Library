import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ModalService } from './modal.service'; 
import { Iicon } from '../_interface/icon';
import { ICONS } from '../_constants/constants';
import { ModalSendClientService } from './modal.sendclient.service';
import { ModalShareUrlClientService } from './modal.shareurlservice';

@Injectable({
  providedIn: 'root',
})
export class CustomDropdownMenuService {
  cssClasses = ['custom-modal-class'];
  ICONS: Iicon = ICONS;
  itemList: LibMenuItem[] = [
    {
      title: 'EDIT_ITINERARY',
      iconUrl: ICONS['edit'],
    },
    {
      title: 'ARCHIVE',
      iconUrl: ICONS['archiveWhite'],
    },
    {
      title: 'UNPUBLISH',
      iconUrl: ICONS['unpublish'],
    },
    {
      title: 'ASSIGN_TO_CLIENT',
      iconUrl: ICONS['headphone'],
      command: () => {
        this.openSendClientModal();
      }
    },
    {
      title: 'ADD_TO_FAVORITES',
      iconUrl: ICONS['heartWhite'],
    },
    {
      title: 'REMOVE_FROM_FAVORITES',
      iconUrl: ICONS['heartFillRed'],
    },
    {
      title: 'SHARE_ITINERARY',
      iconUrl: ICONS['share'],
      command: () => {
        this.openUrlShareModal();
      }
    },
    {
      title: 'BRANCH_THE_ITINERARY',
      iconUrl: ICONS['branch'],
    },
    {
      title: 'REPORT',
      iconUrl: ICONS['report'],
      command: () => {
        this.openReportModal();
      },
    },
    {
      title: 'RESTORE_ITINERARY',
      iconUrl: ICONS['restore'],
    },
    {
      title: 'DELETE_FOREVER',
      iconUrl: ICONS['deleteCross'],
      command: () => {
        this.openModal();
      },
    },
    {
      title: 'EDIT_COMMENT',
      iconUrl: ICONS['edit'],
      command: () => {},
    },
    {
      title: 'REMOVE_FEATURE',
      iconUrl: ICONS['removeFeature'],
    },
    {
      title: 'DELETE_COMMENT',
      iconUrl: ICONS['deleteCross'],
    },
    {
      title: 'Details',
      iconUrl: ICONS['userDetail'],
    },
    {
      title: 'Remove',
      iconUrl: ICONS['binWhite'],
    },
  ];

  pageList = [
    {
      pageName: 'itineraries',
      itemList: [
        {
          title: 'ASSIGN_TO_CLIENT',
        },
        {
          title: 'ADD_TO_FAVORITES',
        },
        {
          title: 'SHARE_ITINERARY',
        },
        {
          title: 'BRANCH_THE_ITINERARY',
        },
        {
          title: 'REPORT',
          command: () => {
            this.openReportModal();
          },
        },
      ],
    },
    {
      pageName: 'builder',
      itemList: [
        {
          title: 'EDIT_ITINERARY',
        },
        {
          title: 'UNPUBLISH',
        },
        {
          title: 'ARCHIVE',
        },
        {
          title: 'ADD_TO_FAVORITES',
        },
        {
          title: 'SHARE_ITINERARY',
        },
      ],
    },
    {
      pageName: 'archives',
      itemList: [
        {
          title: 'RESTORE_ITINERARY',
        },
        {
          title: 'DELETE_FOREVER',
        },
      ],
    },
    {
      pageName: 'favourite',
      itemList: [
        {
          title: 'REMOVE_FROM_FAVORITES',
        },
        {
          title: 'SHARE_ITINERARY',
        },
        {
          title: 'REPORT',
        },
      ],
    },
    {
      pageName: 'stories',
      itemList: [
        {
          title: 'EDIT_COMMENT',
        },
        {
          title: 'REMOVE_FEATURE',
        },
        {
          title: 'DELETE_COMMENT',
        },
        {
          title: 'REPORT',
        },
      ],
    },
    {
      pageName: 'comment-replies',
      itemList: [
        {
          title: 'REMOVE_FEATURE',
        },
        {
          title: 'DELETE_COMMENT',
        },
        {
          title: 'REPORT',
        },
      ],
    },
    {
      pageName: 'create-itinerary-user-search',
      itemList: [
        {
          title: 'Details',
        },
        {
          title: 'Remove',
        },
      ],
    },
  ];

  constructor(
    public router: Router,
    public modalService: ModalService,
    public translateService: TranslateService,
    public clientSendModalService: ModalSendClientService,
    public urlShareModalService: ModalShareUrlClientService
  ) {}

  openUrlShareModal() {
    this.urlShareModalService.toggleModal = !this.urlShareModalService.toggleModal;
  }

  getMenuList(pageName: string): LibMenuItem[] {
    // Find the pageList entry with matching pageName
    const page = this.pageList.find((page) => page.pageName === pageName);
    if (!page) {
      return []; // Return an empty array if pageName is not found
    }

    // Filter the itemList to include only items whose titles are in page.itemList
    const filteredList = this.itemList.filter((item) =>
      page.itemList.some((pageItem) => pageItem.title === item.title),
    );

    filteredList.forEach((item) => {
      item.title = item.title
        ? this.translateService.instant(item.title)
        : item.title;
    });
    page.itemList.forEach((item) => {
      item.title = this.translateService.instant(item.title);
    });
    return filteredList;
  }

  openSendClientModal(): void {
    this.clientSendModalService.toggleModal = !this.clientSendModalService.toggleModal;
  }

  openModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
  openReportModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }
  navigateToRoute(path: string): void {
    this.router.navigate([path], {
      queryParams: { mode: 'edit' },
    });
  }
}
