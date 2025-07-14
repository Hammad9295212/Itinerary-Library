import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Iicon } from '../../../../_interface/icon';
import { ICONS } from '../../../../_constants/constants';
 
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-serach-bottom-bar',
  templateUrl: './serach-bottom-bar.component.html',
  styleUrl: './serach-bottom-bar.component.scss',
})
export class SerachBottomBarComponent {
  ICONS: Iicon = ICONS;
}
