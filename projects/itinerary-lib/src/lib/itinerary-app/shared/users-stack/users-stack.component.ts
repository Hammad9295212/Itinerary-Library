import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { SelectOption } from 'nextsapien-component-lib';   
import { AssetsService } from '../../_services/assets.service';

@Component({
  selector: 'app-users-stack',
  templateUrl: './users-stack.component.html',
  styleUrls: ['./users-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersStackComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() maxVisible = 3;
  @Input() size: number = 41;
  @Input() loading: boolean = false;
  @Input() class: string = '';
  @Input() isSelectableVisible: boolean = false;
  @Input() selectableOption!: SelectOption<string>;
  imageLoaded: boolean[] = [];

  constructor(
    private assetService: AssetsService,
    private cdr: ChangeDetectorRef, 
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.assetService.getMembers().subscribe((data) => {
      this.images = data.map((x) => x.memberPic);
      this.imageLoaded = Array(this.visibleImages.length).fill(false);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  get visibleImages(): string[] {
    return this.images.slice(0, this.maxVisible);
  }

  get remainingCount(): number {
    return this.images.length - this.maxVisible;
  }

  onImageLoad(index: number): void {
    this.imageLoaded[index] = true;
  }
}
