import { ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib'; 
import { CustomDropdownMenuService } from '../../../../_services/custom-dropdown-menu.service';
import { ModalService } from '../../../../_services/modal.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent implements OnInit {
  libMenuItem: LibMenuItem[] = [];
  @ViewChildren('slide') slideElements!: QueryList<ElementRef>;
  @ViewChild('scrollable-content') scrollableContentRef!: ElementRef;
  direction :any = 'vertical'
  transition :boolean =true
  slidesPerView :number = 1
  freeMode :boolean = false
  includeSidePadding : boolean = true
  centeredSlides: boolean= true
 windowHeight :any
  Pagination :any  = {
    el: '.swiper-pagination',
    clickable: true,
  }
  activeSlideIndex = 0;
  constructor(
    public modalService: ModalService,
    public customMenuList: CustomDropdownMenuService,
  ) {}
  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('stories');
    this.windowHeight = window.screen.height;}
  ngAfterViewInit() {
  }
  onSlideChange(event: any) {
    this.activeSlideIndex = event.realIndex || event.activeIndex || 0;
  }
}
