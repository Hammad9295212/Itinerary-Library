import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDestinationComponent } from './pages/default-destination/default-destination.component';
import { ItineraryPreviewComponent } from './pages/itinerary-preview/itinerary-preview.component';
import { NonVisualMapFilterComponent } from './pages/non-visual-map-filter/non-visual-map-filter.component';
import { PathwayRoutesEnum } from '../../_enums/PathwayRoutes.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: PathwayRoutesEnum.ItineraryPreview,
    pathMatch: 'full',
  },
  {
    path: PathwayRoutesEnum.NonVisualMapFilter,
    component: NonVisualMapFilterComponent,
  },
  {
    path: PathwayRoutesEnum.ItineraryPreview,
    component: ItineraryPreviewComponent,
  },
  {
    path: PathwayRoutesEnum.DefaultDestination,
    component: DefaultDestinationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class PathwayRoutingModule {}
