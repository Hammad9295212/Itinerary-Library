import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-action-card',
  templateUrl: './action-card.component.html',
  styleUrl: './action-card.component.scss'
})
export class ActionCardComponent {
  @Output() actionCardClicked: EventEmitter<string> = new EventEmitter<string>();
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() actionName!: string;

  handleClick() {
    this.actionCardClicked.emit(this.actionName);
  }
}
