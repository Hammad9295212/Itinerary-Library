import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recent-searches-list',
  templateUrl: './recent-searches-list.component.html',
  styleUrl: './recent-searches-list.component.scss',
})
export class RecentSearchesListComponent {}
