import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EmojiPickerConfig,
  IText,
  LibMenuItem,
  StatusPosition,
  ToastrDescription,
  ToastrSeverity,
  ToastrStackConfig, 
} from 'nextsapien-component-lib';
import { Subject } from 'rxjs';  
import { ItinerariesRoutesEnum } from '../../../../_enums/ItenariesRoutes.enum';
import { ICommentsData } from '../../../../_interface/commentsdata';
import { Iicon } from '../../../../_interface/icon';
import { ApiService } from '../../../../_services/api.service';
import { CustomDropdownMenuService } from '../../../../_services/custom-dropdown-menu.service';
import { ModalService } from '../../../../_services/modal.service';
import { ICONS } from '../../../../_constants/constants';
@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrl: './comments-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsPageComponent implements OnInit {
  emojiPickerConfig!: EmojiPickerConfig;
  textModel!: IText | undefined;
  libMenuItem: LibMenuItem[] = [];
  commentData: ICommentsData[] = [];
  attachedImages: string[] = [];
  comment!: ICommentsData | undefined;
  ICONS: Iicon = ICONS;
  StatusPosition = StatusPosition;
  config$: Subject<ToastrStackConfig> = new Subject<ToastrStackConfig>();

  //LIFE CYCLES
  constructor( 
    public modalService: ModalService,
    private _location: Location,
    private router: Router,
    private customMenuList: CustomDropdownMenuService,
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
    this.emojiPickerConfig = { pickerIcon: ICONS['pickerIcon'] };
  }
  ngOnInit(): void {
    this.libMenuItem = this.customMenuList.getMenuList('stories');
    this.getCommentsData();
  }

  //UI LOGIC
  getCommentsData(): void {
    this.apiService.get('/assets/commentsData.json').subscribe((data) => {
      this.commentData = data as ICommentsData[];
      const id: string = this.activeRoute.snapshot.params['id'];
      if (id) {
        this.comment = this.commentData.find((x) => x.id === id)!;
        if (this.comment) {
          this.textModel = {
            message: this.comment?.commentText,
            attachments: this.comment?.attachments,
          };
        }
      }
      this.cdr.detectChanges();
    });
  }

  SaveComment(): void {
    if (this.comment && this.comment.id) {
      this.config$.next({
        token: 'token',
        title: 'Comment Updated',
        description: {
          content:
            'Your featured comment will update after being approved by the author.',
          type: ToastrDescription.STRING,
        },
        severity: ToastrSeverity.SUCCESS,
      });
    } else {
      this.comment = {
        id: '65',
        upVotes: 55,
        downVotes: 4,
        title: 'Adventure',
        timeAgo: new Date().toISOString(),
        views: 54,
        commentText: this.textModel?.message!,
        attachments: this.textModel?.attachments || [],
        hasAttachments: true,
        userimageSrc: ICONS['userimageSrc'],
        isEditted: false,
        userName: 'Mr. Nick',
      };

      this.commentData.unshift(this.comment);
      this.cdr.detectChanges();
    }

    this.textModel = { message: ' ', attachments: [] };
    this.comment = undefined;
  }

  //NAVIGATIONS
  navToCommentSearch(_val: any): void {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.COMMENT_SEARCH,
    ]);
  }

  backButton(): void {
    this._location.back();
  }
}
