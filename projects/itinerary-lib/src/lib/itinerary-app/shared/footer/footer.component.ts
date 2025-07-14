import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core'; 
import { IBottomNavigationList } from '../../_interface/bottomNavigationList';
import { BottomNavigationService } from '../../_services/bottom-navigation.service';
import { ShadowRootHandlerService } from '../../_services/shadow-root-handler.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FooterComponent implements OnInit, AfterViewInit {
  public enableBack: boolean = false;

  constructor(
    private el: ElementRef,
    private shadowrootHandler: ShadowRootHandlerService,
    public bottomNavigationService: BottomNavigationService,
    private cdr: ChangeDetectorRef,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(
        (event): event is NavigationEnd => event instanceof NavigationEnd,
      ),
    )
    .subscribe((event: NavigationEnd) => {
      const navItem = this.findNavItem(event.urlAfterRedirects);
      if(navItem) {
        this.bottomNavigationService.setActive(navItem);
        this.cdr.detectChanges();
      }
    });

    const initialLoadUrl = setTimeout(() => {
      const navItem = this.findNavItem(this.router.url);
      if(navItem) {
        this.bottomNavigationService.setActive(navItem);
        this.cdr.detectChanges();
      }
      clearTimeout(initialLoadUrl);
    });

    this.enableBack = true;
    this.cdr.detectChanges();
  }

  findNavItem(url: string): IBottomNavigationList | undefined {
      const homeNavItem = this.bottomNavigationService.bottomNavList.find((bottomnNavList) => {
        return bottomnNavList.label === 'Home';
      });
      if(url === '/archives/archives') {
        const activeNav = this.bottomNavigationService.bottomNavList.find((bottomnNavList) => {
          return bottomnNavList.label === 'Itineraries';
        });
        return activeNav;
      }
      if(homeNavItem?.routerLink === url) {
        return homeNavItem;
      } else {
        let activeNav = this.bottomNavigationService.bottomNavList.find((item) =>
          url.includes(item.routerLink) 
        );
        if(activeNav) {
          return activeNav;
        }
      }
      return undefined;
  }

  ngAfterViewInit(): void {
    this.initShadowrootHandler();
  }

  navigate(
    bottomNavList: IBottomNavigationList[],
    item: IBottomNavigationList,
  ): void {
    this.bottomNavigationService.onNavigationChange(bottomNavList, item);
  }

  initShadowrootHandler(): void {
    const targetNode = this.el.nativeElement;
    this.shadowrootHandler.accessShadowRoot(
      targetNode,
      'lib-bottom-modal',
      () => {
        this.applyStylesToDialog();
      },
    );
  }

  applyStylesToDialog(): void {
    const targetNode = this.el.nativeElement.querySelector(
      'lib-bottom-modal',
    ) as HTMLElement;

    if (targetNode) {
      const classNameElements =
        targetNode.getElementsByClassName('lib-bottom-modal');

      if (classNameElements.length > 0) {
        const dialogDiv = classNameElements[0].shadowRoot?.querySelector(
          'div[role="dialog"]',
        ) as HTMLElement;

        if (dialogDiv) {
          const modalHandle = dialogDiv.getElementsByClassName(
            'modal-handle',
          )[0] as HTMLElement;
          if (modalHandle) {
            modalHandle.style.display = 'none';
          } else {
          }
        } else {
        }
      } else {
      }
    } else {
    }
  }
}
