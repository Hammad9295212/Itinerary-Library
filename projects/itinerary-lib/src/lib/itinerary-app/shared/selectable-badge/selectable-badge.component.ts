import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-selectable-badge',
  templateUrl: './selectable-badge.component.html',
  styleUrl: './selectable-badge.component.scss'
})
export class SelectableBadgeComponent {
    @Input() label: string = '';
    @Input() selected: boolean = true;
    @Output() selectionChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    toggleSelection() {
      this.selected = !this.selected;
      this.selectionChanged.emit(this.selected);
    }
}
