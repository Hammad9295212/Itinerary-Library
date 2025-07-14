import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
})
export class MainDashboardComponent {}
