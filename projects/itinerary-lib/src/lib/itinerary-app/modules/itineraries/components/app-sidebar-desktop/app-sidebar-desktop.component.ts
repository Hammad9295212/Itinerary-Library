import { Component } from '@angular/core';
import { Iicon } from '../../../../_interface/icon';
import { ICONS } from '../../../../_constants/constants';
import { NavigationEnd, Router } from '@angular/router';
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { filter } from 'rxjs';
import { Location } from "@angular/common";

@Component({
  selector: 'lib-app-sidebar-desktop',
  templateUrl: './app-sidebar-desktop.component.html',
  styleUrl: './app-sidebar-desktop.component.css'
})
export class AppSidebarDesktopComponent {
  ICONS: Iicon = ICONS;
  currentUrl = '';
  back() {
    this.location.back();
  }

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events
    .pipe(
      filter(
        (event): event is NavigationEnd => event instanceof NavigationEnd,
      ),
    )
    .subscribe((event: NavigationEnd) => {
      this.currentUrl = event.urlAfterRedirects;
    });
  }

  openCommentsSearch() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.COMMENT_SEARCH,
    ]);
    
  }

  openSearch() {
    this.router.navigate([
      ItinerariesRoutesEnum.SEARCH,
    ]);
  }

  openExplorePage() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.EXPLORE,
    ])
  }

  openBuilderPage() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.BUILDER,
    ]);
  }

  openFavoritesPage() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.FAVORITES,
    ]);
  }
}
