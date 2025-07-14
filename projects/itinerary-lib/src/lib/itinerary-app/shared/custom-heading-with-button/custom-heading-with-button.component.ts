import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-custom-heading-with-button',
  templateUrl: './custom-heading-with-button.component.html',
  styleUrl: './custom-heading-with-button.component.scss',
})
export class CustomHeadingWithButtonComponent {
  @Input() heading!: string;
  @Input() buttonText!: string;
  @Input() buttonIcon!: string;
  @Input() cssClass!: string;
  @Output() buttonClick = new EventEmitter<MouseEvent>();
}
