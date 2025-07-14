import { Component, Input } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICommentsData } from '../../../../../../_interface/commentsdata';
import { Iicon } from '../../../../../../_interface/icon'; 
import { CustomDropdownMenuService } from '../../../../../../_services/custom-dropdown-menu.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  selector: 'app-comment-single',
  templateUrl: './comment-single.component.html',
  styleUrl: './comment-single.component.css'
})
export class CommentSingleComponent {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() comment!: ICommentsData;
  @Input() featured!: boolean;
  commentsData: ICommentsData[] | undefined;
  ICONS: Iicon = ICONS;

  constructor(
    private customMenuList: CustomDropdownMenuService
  ) {
    this.libMenuItem = this.customMenuList.getMenuList('comment-replies');
  }

  ngOnInit(): void {
  console.log(this.libMenuItem,'this.libMenuItem')

  }

  handleMenueItemSelect(): void { }
  handleMenuItemChange(): void { }
  handleMenuClick(): void {
  }
}
