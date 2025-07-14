import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Type,
} from '@angular/core';
import { Router } from '@angular/router'; 
import { CommentImagesComponent } from './comment-images/comment-images.component';
import { LibMenuItem } from 'nextsapien-component-lib';  
import { ICONS } from '../../_constants/constants';
import { ItinerariesRoutesEnum } from '../../_enums/ItenariesRoutes.enum';
import { ICommentsData } from '../../_interface/commentsdata';
import { Iicon } from '../../_interface/icon';
import { CommentImageService } from '../../_services/comment-image.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnInit {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() commentsData: ICommentsData[] | undefined;
  ICONS: Iicon = ICONS;
  index: number = 0;
  isOpen: boolean = false;
  imageComponent: Type<unknown> = CommentImagesComponent;

  //LIFE CYCLES
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private commentImageService: CommentImageService,
  ) {}
  ngOnInit(): void {
    for (let i = 0; i < this.libMenuItem.length; i++) {
      this.libMenuItem[i].command = () => {
        this.handleUpdateComment();
      };
    }
  }

  //UI LOGIC
  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(i: number): void {
    this.index = i;
  }

  close = (): void => {
    this.isOpen = false;
  };

  showImage(images: string[], currentIndex: number): void {
    if (this.isOpen) {
      this.close();
    }

    setTimeout(() => {
      this.isOpen = true;
      this.commentImageService.image = images;
      this.commentImageService.index = currentIndex;
      this.cdr.detectChanges();
    }, 0);
  }

  //NAVGIATIONS
  handleUpdateComment() {
    const id: string = this.commentsData![this.index].id;
    this.router.navigate([ItinerariesRoutesEnum.COMMENTS, id]);
  }

  upvote(index: number) {
    this.commentsData![index].upVotes += 1;
  }

  downvote(index: number) {
    this.commentsData![index].downVotes += 1;
  }

  RedirectToReplies() {
    this.router.navigate([
      ItinerariesRoutesEnum.ITINERARY,
      ItinerariesRoutesEnum.COMMENT_REPLIES,
    ]);
  }
}
