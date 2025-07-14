import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-handle-update-comment-request',
  templateUrl: './handle-update-comment-request.component.html',
  styleUrl: './handle-update-comment-request.component.scss',
})
export class HandleUpdateCommentRequestComponent {
  constructor(private _location: Location) {}
  backButton(): void {
    this._location.back();
  }
}
