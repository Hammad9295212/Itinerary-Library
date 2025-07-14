import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pathway',
  templateUrl: './pathway.component.html',
  styleUrl: './pathway.component.scss',
})
export class PathwayComponent {}
