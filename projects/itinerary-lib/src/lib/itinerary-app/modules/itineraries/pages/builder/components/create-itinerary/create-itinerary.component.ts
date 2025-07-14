import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core'; 
import { ModalService } from '../../../../../../_services/modal.service';
import { Iicon } from '../../../../../../_interface/icon';
import { ShadowRootHandlerService } from '../../../../../../_services/shadow-root-handler.service';
import { ICONS } from '../../../../../../_constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrl: './create-itinerary.component.scss',
})
export class CreateItineraryComponent implements OnInit, AfterViewInit {
  @ViewChild('testModal', { static: false })
  testModal: CreateItineraryComponent | undefined;
  enableBack: boolean = true;
  cssClass = ['create-itinerary-modal'];
  ICONS: Iicon = ICONS;

  constructor(
    public modalService: ModalService,
    private el: ElementRef,
    private shadowrootHandler: ShadowRootHandlerService,
  ) {}

  ngAfterViewInit(): void {
    this.initShadowrootHandler();
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
          // Apply the desired styles
          dialogDiv.style.backgroundColor = 'transparent'; // Example modification
          dialogDiv.style.boxShadow = 'none';
          //remove the dialog uppar bar
        } else {
        }
      } else {
      }
    } else {
    }
  }

  ngOnInit(): void {
    this.modalService.bottomToggleModal = false;
  }

  openModal(): void {
    this.modalService.bottomToggleModal = !this.modalService.bottomToggleModal;
  }
}
