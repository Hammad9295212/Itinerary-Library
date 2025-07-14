import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { EmojiPickerConfig, IText } from 'nextsapien-component-lib';
import { ModalService } from '../../../../_services/modal.service';
import { ICONS } from '../../../../_constants/constants';
  
@Component({
  selector: 'app-comment-replies',
  templateUrl: './comment-replies.component.html',
  styleUrl: './comment-replies.component.css',
})
export class CommentRepliesComponent {
  ICONS = ICONS;
  emojiPickerConfig!: EmojiPickerConfig;
   textModel!: IText | undefined;

  comment = {
    id: '1',
    upVotes: 2.4,
    downVotes: 5,
    title: 'Adventuretour',
    userName: 'Jonathan',
    timeAgo: '2 hours ago',
    location: 'WESTMINSITERO',
    views: 100,
    hasAttachments: false,
    isEditted: false,
    attachments: [],
    userimageSrc: '/assets/images/user-image.png',
    commentText:
      'I had Great Experience out there. I would say its perfect for a coffee lover.',
  };

  replies: any[] = [];

  constructor(
    private location: Location,
    public modalService: ModalService,
  ) {
    this.emojiPickerConfig = { pickerIcon: ICONS['pickerIcon'] };
  }

  back() {
    this.location.back();
  }

  postReply() {
    const new_reply = { ...this.comment };
    const raw_Reply = this.textModel;
    if (raw_Reply?.attachments) {
      new_reply.attachments = raw_Reply.attachments as never[];
      new_reply.hasAttachments = true;
    }
    new_reply.commentText = raw_Reply?.message!;

    this.replies.push(new_reply);
  }
  ngOnInit(): void {
  
  }

}
