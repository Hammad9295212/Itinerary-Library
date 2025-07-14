import { Component, Input } from '@angular/core'; 
import { CommentImageService } from '../../../_services/comment-image.service';

@Component({
  selector: 'app-comment-images',
  templateUrl: './comment-images.component.html',
  styleUrl: './comment-images.component.css',
})
export class CommentImagesComponent {
  @Input() images: string[] = [];
  @Input() index: number = 0;

  constructor(commentImage: CommentImageService) {
    this.images = commentImage.image;
    this.index = commentImage.index;
  }
}
