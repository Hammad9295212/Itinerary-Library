// import {
//   ChangeDetectionStrategy,
//   Component,
//   EventEmitter,
//   Input,
//   Output,
// } from '@angular/core';
// import { Router } from '@angular/router';
// import { LibMenuItem } from 'nextsapien-component-lib';
// import { ICONS } from 'src/app/constants/constants';
// import { Iicon } from 'src/app/interface/icon';
// import { ModalService } from 'src/app/services/core/modal/modal.service';
// import { SearchPopupComponent } from 'src/app/shared/components/search-popup/search-popup.component';
// @Component({
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss',
// })
// export class HeaderComponent {
//   @Input() heading!: string;
//   @Input() headerRightIcon: string = ICONS.search;
//   @Output() firstButton: EventEmitter<MouseEvent> =
//     new EventEmitter<MouseEvent>();
//   // @Output() lastButton: EventEmitter<MouseEvent> =
//   //   new EventEmitter<MouseEvent>();
//   @Input() cssClass!: string;
//   @Input() isSearchVisible: boolean = true;
//   @Input() isTextSearch: boolean = false;
//   @Input() menuItems: LibMenuItem[] = [];
//   ICONS: Iicon = ICONS;
//   modalComponent = SearchPopupComponent;

//   constructor(
//     public modalService: ModalService,
//     private router: Router,
//   ) {}

//   // handleBackBtnClicked = (): void => this.lastButton.emit();
//   firstButtonClick = (): void => this.firstButton.emit();

//   openModal() {
//     if (this.isTextSearch) {
//       this.modalService.toggleGlobalSearch = true;
//     } else {
//       this.router.navigate(['/search']);
//     }
//   }
// }

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core'; 
import { ICONS } from '../../_constants/constants';
import { Iicon } from '../../_interface/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() heading!: string;
  @Input() headerRightIcon: string = ICONS['search'];
  @Input() titleIcon: string = '';
  @Input() cssClass!: string;
  @Output() firstButton: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();
  @Output() titleIconClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();
  @Input() headerSuffixTemplate!: TemplateRef<any>;
  ICONS: Iicon = ICONS;

  firstButtonClick(): void {
    this.firstButton.emit();
  }

  onTitleIconClick() {
    this.titleIconClick.emit();
  }
}
