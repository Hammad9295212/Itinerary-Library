import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonsModule,
  LibModalModule,
  SearchBarModule,
  SectionSeparatorComponent,
  GridToolbarModule,
  GridFiltersModule,
  GridModule
  
  
} from 'nextsapien-component-lib'; 
import { SharedModule } from '../../shared/shared.module';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { RecentSearchesItemComponent } from './components/recent-searches-item/recent-searches-item.component';
import { RecentSearchesListComponent } from './components/recent-searches-list/recent-searches-list.component';
import { RecentSearchesComponent } from './components/recent-searches/recent-searches.component';
import { SearchChipsComponent } from './components/search-chips/search-chips.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SerachBottomBarComponent } from './components/serach-bottom-bar/serach-bottom-bar.component';
import { SerachClearHistoryComponent } from './components/serach-clear-history/serach-clear-history.component';
import { MainSearchComponent } from './pages/main-search/main-search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ClearHistoryPopupComponent } from './components/clear-history-popup/clear-history-popup.component'; 

@NgModule({
  declarations: [
    SearchComponent,
    SearchChipsComponent,
    RecentSearchesComponent,
    QuickActionsComponent,
    MainSearchComponent,
    RecentSearchesListComponent,
    RecentSearchesItemComponent,
    SerachBottomBarComponent,
    SerachClearHistoryComponent,
    SearchResultsComponent,
    ClearHistoryPopupComponent
  ],
  imports: [
    SearchBarModule,
    TranslateModule,
    ButtonsModule,
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    SectionSeparatorComponent,
    NgOptimizedImage,
    LibModalModule, 
    GridToolbarModule ,
    GridModule,
  GridFiltersModule,

  ],
})
export class SearchModule {}
