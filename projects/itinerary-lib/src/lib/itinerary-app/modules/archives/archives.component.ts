import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.scss',
})
export class ArchivesComponent {
  constructor() {}

  backButton(): void {
    window.history.back();
  }
}
