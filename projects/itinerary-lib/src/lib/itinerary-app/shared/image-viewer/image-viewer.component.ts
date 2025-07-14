import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css',
})
export class ImageViewerComponent {
  isLoading: boolean = true;

  //LIFE CYCLE
  constructor(
    public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string },
  ) {}

  onImageLoad(): void {
    this.isLoading = false;
  }
  close() {
    this.dialogRef.close();
  }
}
