import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';   
import { ICONS } from '../../_constants/constants';
import { ICardData } from '../../_interface/cardData';
import { Iicon } from '../../_interface/icon';
import { Itinerary } from '../../_models/Itinerary';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cutom-card',
  templateUrl: './cutom-card.component.html',
  styleUrl: './cutom-card.component.scss',
})
export class CutomCardComponent {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() isDraft!: boolean;
  @Input() cardData: Itinerary | undefined;
  processedCardData: ICardData | undefined;
  @Input() displayPublishStatus!: boolean;
  ICONS: Iicon = ICONS;
  @Input() images: string[] = [];
  @Input() itineraryStarted: boolean = false;
  @Output() StartItineraryClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() TitleClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() forkClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() messageClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() userProfileClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() itineraryWatchingUsersClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output() imageClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() eyeClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() menuClicked: EventEmitter<Itinerary> = new EventEmitter<Itinerary>();

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

  constructor(
  ) { }

  ngOnInit(): void {
    if(this.cardData) {
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

  parseStringToNumber(value: string) {
    return parseInt(value);
  }

  private processCardData(data: Itinerary): ICardData {
    return {
      ...data,
      id: data.id,
      upVotes: data.stats?.upvotes?.toString() ?? '0',
      downVotes: this.nullCheck(data.stats?.downvotes) ? 0 : (data.stats?.downvotes ?? 0),
      title: this.nullCheck(data.name) ? 'Untitled Itinerary' : data.name,
      userName: this.nullCheck(data.user?.name) ? 'You' : (data.user?.name === "Jonathan" ? 'You' : (data.user?.name ?? "")),//Temporarily added Jonathan will need to change once user data is available in application
      timeAgo: this.nullCheck(data.createdAt) ? '' : '2 hours ago',
      users: 4,
      views: this.nullCheck(data.stats?.views) ? 0 : (data.stats?.views ?? 0),
      comments: 0,
      shares: this.nullCheck(data.stats?.shares) ? 0 : (data.stats?.shares ?? 0),
      imageSrc: data.isDraft ? ICONS['untitled'] : (data.image ?? ICONS['untitled']),
      userimageSrc: data.user?.image
        ?? ICONS['notSpecified'],
      location: this.nullCheck(data.startLocation?.address) ? 'Not Specified' : (data.startLocation?.address ?? ""),
      isDraft: data.isDraft ?? false
    };
  }

  handleMenueItemSelect(): void { }
  handleMenuItemChange(): void { }
  handleMenuClick(): void { this.menuClicked.emit(this.cardData) }

  handleForkClick = (): void => this.forkClicked.emit();
  handleStartItineraryClick = (): void => this.StartItineraryClick.emit();
  handleTitleClick = (): void => this.TitleClicked.emit();
  handleMessageClicked = (): void => this.messageClicked.emit();
  handleUserProfileClicked = (): void => this.userProfileClicked.emit();
  handleImageClick = (): void => this.imageClicked.emit();
  handleEyeClicked = (): void => this.eyeClicked.emit();

  handleItineraryWatchingClicked(): void {
    this.itineraryWatchingUsersClicked.emit();
  }
}
