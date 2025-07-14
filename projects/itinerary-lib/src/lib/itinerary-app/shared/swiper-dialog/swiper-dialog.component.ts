import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Image {
  idx: number;
  src: string;
}
@Component({
  selector: 'app-swiper-dialog',
  templateUrl: './swiper-dialog.component.html',
  styleUrl: './swiper-dialog.component.css',
})

export class SwiperDialogComponent {
  images: Image[];
  currentIndex: number;
  isLoading: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { images: string[]; currentIndex: number },
    private dialogRef: MatDialogRef<SwiperDialogComponent>,
  ) {
    const images = data.images;
    images.sort((a, b) => {
      const nameA = a.split('/').pop()?.toLowerCase() ?? '';
      const nameB = b.split('/').pop()?.toLowerCase() ?? '';
      return nameA.localeCompare(nameB);
    });

    this.images = images.map((image, index) => ({
      idx: index + 1,
      src: image
    }));
    this.currentIndex = data.currentIndex;
  }

  onImageLoad(): void {
    this.isLoading = false;
  }

  updateCurrentIndex(img: Image) {
    this.currentIndex = img.idx;
  }
  close() {
    this.dialogRef.close();
  }
}
