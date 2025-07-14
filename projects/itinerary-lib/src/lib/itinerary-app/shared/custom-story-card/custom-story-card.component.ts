import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { LibMenuItem } from 'nextsapien-component-lib';   
import { ICONS } from '../../_constants/constants';
import { ItinerariesRoutesEnum } from '../../_enums/ItenariesRoutes.enum';
import { ICardData } from '../../_interface/cardData';
import { Iicon } from '../../_interface/icon';
import { ApiService } from '../../_services/api.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-custom-story-card',
  templateUrl: './custom-story-card.component.html',
  styleUrl: './custom-story-card.component.scss',
})
export class CustomStoryCardComponent implements OnInit {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() isDraft!: boolean;
  cardData: ICardData | undefined;
  private scrollTimeout: any;
   private isScrolling = false;
  processedCardData: ICardData | undefined;
  ICONS: Iicon = ICONS;
  cardDataForLocations = {
    locationColumn1: [
      { icon: ICONS['temp'], name: 'Palace' },
      { icon: ICONS['palace2'], name: 'Template' },
      { icon: ICONS['palace2'], name: 'Optional' },
      { icon: ICONS['palace2'], name: 'Optional' },
    ],
    locationColumn2: [
      { icon: ICONS['coffee'], name: 'Coffee shop' },
      { icon: ICONS['template'], name: 'Optional' },
      { icon: ICONS['template'], name: 'Optional' },
      { icon: ICONS['template'], name: 'Optional' },
    ],
  };

    images: string[] = [
      "https://static.gopro.com/assets/blta2b8522e5372af40/blt2d5eb5852c683074/671a428c24f2274281f1fb1a/02_HP_H13CE_375.jpg",
      "https://static.gopro.com/assets/blta2b8522e5372af40/blt2d5eb5852c683074/671a428c24f2274281f1fb1a/02_HP_H13CE_375.jpg",
      "https://static.gopro.com/assets/blta2b8522e5372af40/blt2d5eb5852c683074/671a428c24f2274281f1fb1a/02_HP_H13CE_375.jpg"
    ]

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.isScrolling) {
      this.isScrolling = true;

      if (event.deltaY > 0) {
        console.log('scroll down');
        // Trigger your "next video" or content change here
      } else if (event.deltaY < 0) {
        console.log('scroll up');
        // Trigger your "previous video" or content change here
      }

      // Wait until the gesture is finished
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
      }, 500); // Adjust this duration to feel smoother or stricter
    }

    // Optional: reset timeout if new scroll comes before timeout ends
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }

  ngOnInit(): void {
    this.loadCardData();
    this.libMenuItem = this.libMenuItem.map((val) => {
      if (val.title === 'EDIT_COMMENT') {
        return {
          ...val,
          command: () => {
            this.navToUpdateComment();
          },
        };
      }
      return val;
    });
  }

  private InvalidDataCheck(data: string | number | null | undefined): boolean {
    return (
      data?.toString().length == 0 ||
      data == null ||
      data == undefined ||
      data == '0' ||
      data == 0 ||
      data == '-'
    );
  }

  private processCardData(data: ICardData): ICardData {
    return {
      ...data,
      id: data.id ?? '0',
      upVotes: this.InvalidDataCheck(data.upVotes) ? '00' : data.upVotes,
      title: this.InvalidDataCheck(data.title)
        ? 'Untitled Itinerary'
        : data.title,
      userName: this.InvalidDataCheck(data.userName) ? 'You' : data.userName,
      timeAgo: this.InvalidDataCheck(data.timeAgo) ? '' : data.timeAgo,
      users: this.InvalidDataCheck(data.users) ? 0 : data.users,
      views: this.InvalidDataCheck(data.views) ? 0 : data.views,
      comments: this.InvalidDataCheck(data.comments) ? 0 : data.comments,
      shares: this.InvalidDataCheck(data.shares) ? 0 : data.shares,
      imageSrc: this.InvalidDataCheck(data.imageSrc)
        ? ICONS['untitled']
        : data.imageSrc,
      userimageSrc: this.InvalidDataCheck(data.userimageSrc)
        ? ICONS['notSpecified']
        : data.userimageSrc,
      location: this.InvalidDataCheck(data.location)
        ? 'Not Specified'
        : data.location,
    };
  }

  loadCardData() {
    if (!this.isDraft) {
      this.apiService.get('/assets/data.json').subscribe((data) => {
        this.cardData = data as ICardData;
        this.processedCardData = this.processCardData(this.cardData);
        this.cdr.detectChanges();
      });
    } else {
      this.cardData = this.createDummyCard();
      this.processedCardData = this.processCardData(this.cardData);
    }
  }
  createDummyCard(): ICardData {
    let card: ICardData;
    card = {
      id: '1',
      upVotes: '',
      downVotes: 5,
      title: '',
      userName: '',
      timeAgo: '',
      location: '',
      views: 0,
      comments: 0,
      shares: 0,
      users: 0,
      imageSrc: '',
      userimageSrc: '',
      isDraft: true,
    };

    return card;
  }
  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}

  goBack(){
    window.history.back();
  }

  //NAVIGATION
  navToUpdateComment(): void {
    this.router.navigate([ItinerariesRoutesEnum.COMMENTS, this.cardData?.id]);
  }
}
