import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-map-header',
  templateUrl: './map-header.component.html',
  styleUrl: './map-header.component.scss',
})
export class MapHeaderComponent {
  @Input() title: string = 'Default Title';
  @Input() backLink: string = '/';
  @Input() customcss: string = 'py-1';
  @Output() onSearchClick = new EventEmitter<boolean>();

  isSearchClicked: boolean = false;

  constructor(private location: Location) {}

  goBack(): void {
    if (this.backLink) {
      window.location.href = this.backLink;
    } else {
      this.location.back();
    }
  }
}
