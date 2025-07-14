import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ArchivesModule } from './modules/archives/archives.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ItinerariesModule } from './modules/itineraries/itineraries.module';
import { PathwayModule } from './modules/pathway/pathway.module';
import { SearchModule } from './modules/search/search.module';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [
  { path: '', redirectTo: 'itineraries', pathMatch: 'full' },
  {
    path: 'itineraries',
    loadChildren: () => ItinerariesModule
  },
  {
    path: 'search',
    loadChildren: () => SearchModule
  },
  {
    path: 'archives',
    loadChildren: () => ArchivesModule
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule,
  },
  {
    path: 'pathway',
    loadChildren: () => PathwayModule
  },
  {
    path: 'user',
    loadChildren: () => UserModule
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItineraryLibRoutingModule {}
