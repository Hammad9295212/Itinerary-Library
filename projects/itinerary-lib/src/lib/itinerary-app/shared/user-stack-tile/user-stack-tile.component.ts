import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SelectOption } from 'nextsapien-component-lib';  
import { ICONS } from '../../_constants/constants';
import { Iicon } from '../../_interface/icon';

@Component({
  selector: 'app-user-stack-tile',
  templateUrl: './user-stack-tile.component.html',
  styleUrl: './user-stack-tile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStackTileComponent {
  ICONS: Iicon = ICONS;
  @Input() class: string = '';
  @Input() buttonText: string = 'View Invites';
  @Input() label: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() images: string[] = [];
  @Input() maxVisible = 3;
  @Input() size: number = 41;
  @Input() isSelectableVisible: boolean = false;
  @Input() selectableOption!: SelectOption<string>;

  //UI LOGIC
  handleBtnClick = (): void => this.onClick.emit();
}
