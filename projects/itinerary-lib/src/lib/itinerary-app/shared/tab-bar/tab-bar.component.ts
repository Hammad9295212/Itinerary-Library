import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api'; 
import { ItinerariesRoutesEnum } from '../../_enums/ItenariesRoutes.enum';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  @Input() tabMenuItems: MenuItem[] = [
    {
      label: 'Explore',
      icon: 'pi pi-fw pi-home',
      routerLink: ItinerariesRoutesEnum.ITINERARY_EXPLORE,
    },
    {
      label: 'Builder',
      icon: 'pi pi-fw pi-map-marker',
      routerLink: ItinerariesRoutesEnum.ITINERARY_BUILDER,
    },
    {
      label: 'Favorites',
      icon: 'pi pi-fw pi-user',
      routerLink: ItinerariesRoutesEnum.ITINERARY_FAVOURITES,
    },
  ];
  activeItem: MenuItem = this.tabMenuItems[0];

  //LIFE CYCLES
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activeItem = this.tabMenuItems.find(
      (x) => x.routerLink === this.router.url,
    )!;
    this.router.events
    .pipe(
      filter(
        (event): event is NavigationEnd => event instanceof NavigationEnd,
      ),
      takeUntil(this.destroy$)
    )
    .subscribe((event: NavigationEnd) => {
      this.activeItem = this.tabMenuItems.find(
        (x) => x.routerLink === event.urlAfterRedirects
      )!;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(); // Emit a value to trigger takeUntil
    this.destroy$.complete(); // Complete the subject
  }

  //UI LOGIC
  onActiveItemChange(event: MenuItem): void {
    this.activeItem = event;
    // debugger;
    this.router.navigate([event.routerLink]);
  }
}
