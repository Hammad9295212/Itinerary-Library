import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'; 
import { LibMenuItem } from 'nextsapien-component-lib';  
import { ICONS } from '../../_constants/constants';
import { Iicon } from '../../_interface/icon';

@Component({
  selector: 'app-notification-tile',
  templateUrl: './notification-tile.component.html',
  styleUrl: './notification-tile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationTileComponent {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() content!: string;
  @Input() btnText: string = 'Action';
  @Input() isBtnVisible: boolean = false;
  @Input() notificationAttended: boolean = true;
  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();
  ICONS: Iicon = ICONS;

  constructor() {}
  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
  handleBtnClick(): void {
    this.btnClick.emit();
  }
}
