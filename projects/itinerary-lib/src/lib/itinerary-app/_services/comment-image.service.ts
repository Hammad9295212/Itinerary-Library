import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentImageService {
  constructor() {}

  image: string[] = [];
  index: number = 0;
}
