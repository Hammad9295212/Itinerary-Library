import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';   
import { ICONS } from '../../_constants/constants';
import { ICardData } from '../../_interface/cardData';
import { Iicon } from '../../_interface/icon';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() isDraft!: boolean;
  cardData: ICardData | undefined;
  processedCardData: ICardData | undefined;
  ICONS: Iicon = ICONS;
  @Input() itineraryStarted: boolean = false;
  @Output() StartItineraryClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() TitleClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() forkClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() messageClicked: EventEmitter<void> = new EventEmitter<void>();

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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (!this.isDraft) {
      this.apiService.get('/assets/data.json').subscribe((data) => {
        this.cardData = data as ICardData;
        this.processedCardData = this.processCardData(this.cardData);
      });
    } else {
      this.cardData = {
        id: '2',
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
      this.processedCardData = this.processCardData(this.cardData);
    }
  }

  private nullCheck(data: string | number | null | undefined): boolean {
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
      id: data.id,
      upVotes: this.nullCheck(data.upVotes) ? '00' : data.upVotes,
      title: this.nullCheck(data.title) ? 'Untitled Itinerary' : data.title,
      userName: this.nullCheck(data.userName) ? 'You' : data.userName,
      timeAgo: this.nullCheck(data.timeAgo) ? '' : data.timeAgo,
      users: this.nullCheck(data.users) ? 0 : data.users,
      views: this.nullCheck(data.views) ? 0 : data.views,
      comments: this.nullCheck(data.comments) ? 0 : data.comments,
      shares: this.nullCheck(data.shares) ? 0 : data.shares,
      imageSrc: this.nullCheck(data.imageSrc) ? ICONS['untitled'] : data.imageSrc,
      userimageSrc: this.nullCheck(data.userimageSrc)
        ? ICONS['notSpecified']
        : data.userimageSrc,
      location: this.nullCheck(data.location) ? 'Not Specified' : data.location,
    };
  }

  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}

  handleForkClick(): void {
    this.forkClicked.emit();
  }
  handleStartItineraryClick(): void {
    this.StartItineraryClick.emit();
  }
  handleTitleClick(): void {
    this.TitleClicked.emit();
  }
  handleMessageClicked(): void {
    this.messageClicked.emit();
  }
}
