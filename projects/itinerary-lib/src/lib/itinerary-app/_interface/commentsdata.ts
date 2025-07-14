export interface ICommentsData {
  id: string;
  upVotes: number;
  downVotes: number;
  title: string;
  userName: string;
  timeAgo: string;
  views: number;
  commentText: string;
  hasAttachments: boolean;
  isEditted: boolean;
  userimageSrc: string;
  attachments: string[];
}
