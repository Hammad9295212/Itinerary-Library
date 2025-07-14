import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrl: './user-tile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTileComponent {
  @Input() sufixTemplate: TemplateRef<any> | null = null;
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() image: string = '';
  @Input() class: string = '';
  constructor() {}
}
