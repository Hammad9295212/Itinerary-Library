import { Component, Input } from '@angular/core';
import { ICONS } from '../../_constants/constants';
import { Iicon } from '../../_interface/icon';

@Component({
  selector: 'lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  @Input("buttonText") buttonText!: string;
  ICONS: Iicon = ICONS;
  
  constructor() {
  }
}
