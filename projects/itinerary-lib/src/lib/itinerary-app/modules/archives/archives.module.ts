import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { LibModalModule } from 'nextsapien-component-lib';
import { SharedModule } from '../../shared/shared.module';
import { ItinerariesModule } from '../itineraries/itineraries.module';
import { ArchivesRoutingModule } from './archives-routing.module';
import { ArchivesComponent } from './archives.component';
import { MainArchivesComponent } from './pages/main-archives/main-archives.component';

@NgModule({
  declarations: [ArchivesComponent, MainArchivesComponent],
  imports: [
    CommonModule,
    ArchivesRoutingModule,
    SharedModule,
    LibModalModule,
    ItinerariesModule,
    TranslateModule,
  ],
})
export class ArchivesModule {}
