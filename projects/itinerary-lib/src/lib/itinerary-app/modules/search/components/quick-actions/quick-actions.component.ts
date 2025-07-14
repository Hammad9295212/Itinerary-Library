import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { Iicon } from '../../../../_interface/icon';
import { ICONS } from '../../../../_constants/constants';
 
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss',
})
export class QuickActionsComponent {
  ICONS: Iicon = ICONS;
  ItineraryRoutes = ItinerariesRoutesEnum;
}
