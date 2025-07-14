import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';  
import { ItinerariesRoutesEnum } from '../../../../../_enums/ItenariesRoutes.enum';
import { ICommentsData } from '../../../../../_interface/commentsdata';
import { Iicon } from '../../../../../_interface/icon';
import { ApiService } from '../../../../../_services/api.service';
import { ICONS } from '../../../../../_constants/constants';

@Component({
  selector: 'app-comment-comparison',
  templateUrl: './comment-comparison.component.html',
  styleUrl: './comment-comparison.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComparisonComponent implements OnInit {
  @Input() isDraft!: boolean;
  cardData: ICommentsData[] | undefined;
  processedCardData: ICommentsData | undefined;
  ICONS: Iicon = ICONS;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getCommentsData();
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

  private processCardData(data: ICommentsData): ICommentsData {
    return {
      ...data,
      upVotes: this.InvalidDataCheck(data.upVotes) ? 0 : data.upVotes,
      title: this.InvalidDataCheck(data.title)
        ? 'Untitled Itinerary'
        : data.title,
      userName: this.InvalidDataCheck(data.userName) ? 'You' : data.userName,
      timeAgo: this.InvalidDataCheck(data.timeAgo) ? '' : data.timeAgo,

      views: this.InvalidDataCheck(data.views) ? 0 : data.views,
      commentText: this.InvalidDataCheck(data.commentText)
        ? ''
        : data.commentText,

      userimageSrc: this.InvalidDataCheck(data.userimageSrc)
        ? ICONS['notSpecified']
        : data.userimageSrc,
    };
  }

  getCommentsData() {
    this.apiService.get('/assets/commentsData.json').subscribe((data) => {
      this.cardData = data as ICommentsData[];
      this.processedCardData = this.cardData?.[0]
        ? this.processCardData(this.cardData[0])
        : undefined;
      this.cdr.detectChanges();
    });
  }
  approve() {
    this.navToComments();
  }
  disapprove() {
    this.navToComments();
  }
  navToComments() {
    this.router.navigate([ItinerariesRoutesEnum.COMMENTS]);
  }
  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
