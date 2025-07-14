import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LibMenuItem } from 'nextsapien-component-lib'; 
import { Iicon } from '../../../../_interface/icon';
import { ICONS } from '../../../../_constants/constants';
 
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  ICONS: Iicon = ICONS;
  menuItems: LibMenuItem[] = [];
  navigationItems = [
    { label: 'MENU.HOME', iconPath: this.ICONS['dashHomeActive'] },
    { label: 'MENU.CONSTITUENTS', iconPath: this.ICONS['users'] },
    { label: 'MENU.ITINERARY', iconPath: this.ICONS['itineraries'] },
    { label: 'MENU.STATS', iconPath: this.ICONS['stats'] },
    { label: 'MENU.SETTINGS', iconPath: this.ICONS['setting'] },
  ];
  constructor(private translate: TranslateService) {
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    this.menuItems = [
      {
        title: this.translate.instant('NAVBAR.LOGOUT'),
        titlePrefix: '',
        iconUrl: ICONS['logout'],
      },
      {
        title: this.translate.instant('NAVBAR.INFO'),
        titlePrefix: '',
        iconUrl: ICONS['info'],
      },
      {
        title: this.translate.instant('NAVBAR.FEEDBACK'),
        titlePrefix: '',
        iconUrl: ICONS['feedback'],
      },
      {
        title: this.translate.instant('NAVBAR.SEARCH_2'),
        titleSuffix: 'AI',
        iconUrl: ICONS['dashboardSearch'],
      },
      {
        title: this.translate.instant('NAVBAR.NOTIFICATIONS'),
        titlePrefix: '',
        iconUrl: ICONS['notifications'],
      },
    ];
  }

  handleSearchStringChange(_$event: string) {}

  clear(): void {}
}
