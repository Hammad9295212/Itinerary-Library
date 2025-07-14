import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Iicon } from '../../../../_interface/icon'; 
import { ICONS } from '../../../../_constants/constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-default-destination',
  templateUrl: './default-destination.component.html',
  styleUrl: './default-destination.component.scss',
})
export class DefaultDestinationComponent {
  destination: string = '';
  newDestination: string = '';
  ICONS: Iicon = ICONS;

  addDestination(): void {
    this.newDestination = this.destination;
  }

  onDestinationAdded(_destination: string): void {
    this.destination = '';
  }
}
