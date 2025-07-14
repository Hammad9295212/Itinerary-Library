import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, HostListener, inject, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common'; 
import { PopupModalService } from 'nextsapien-component-lib';
import { Subscription } from 'rxjs'; 
import { BottomNavigationService } from './_services/bottom-navigation.service';

@Component({
  selector: 'lib-itinerary-lib',
  template: `
    <router-outlet></router-outlet> <ng-container #dynamicModal></ng-container>
  `,
  styles: ``
})
export class ItineraryLibComponent implements OnInit, AfterViewInit, OnDestroy {
 isSmallScreen = false;
  private breakpointSubscription!: Subscription;
  @ViewChild('dynamicModal', { read: ViewContainerRef })
  dynamicModal!: ViewContainerRef;
  private popupModalService = inject(PopupModalService);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    public el: ElementRef,
    public location: Location,
    public navService: BottomNavigationService,
  ) { }

  ngOnInit(): void {
    this.handleScreenSizeChange();
  }

  ngAfterViewInit(): void {
    this.popupModalService.setRootViewContainerRef(this.dynamicModal);
  }

  //use to change application ui and behaviour based on screen size
  handleScreenSizeChange(): void {
    this.checkWindowWidth();
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
        if (this.isSmallScreen) {
          this.renderer.removeClass(document.body, 'customBody');
        } else {
          this.renderer.addClass(document.body, 'customBody');
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: Event): void {
    this.checkWindowWidth();
  }

  checkWindowWidth(): void {
    const width = window.innerWidth;
    if (width <= 960) {
      if (this.location.path().includes('dashboard')) {
      }
    }
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}
