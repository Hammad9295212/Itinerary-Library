import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule, SearchBarModule } from 'nextsapien-component-lib';
import { SharedModule } from '../../shared/shared.module';
import { ItinerariesModule } from '../itineraries/itineraries.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    MainDashboardComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgOptimizedImage,
    ItinerariesModule,
    ButtonsModule,
    TranslateModule,
    SearchBarModule,
  ],
})
export class DashboardModule {}
