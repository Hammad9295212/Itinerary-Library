import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Iicon } from '../../../../_interface/icon';
import { ICONS } from '../../../../_constants/constants';
 
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recent-searches-item',
  templateUrl: './recent-searches-item.component.html',
  styleUrl: './recent-searches-item.component.scss',
})
export class RecentSearchesItemComponent {
  ICONS: Iicon = ICONS;
}
