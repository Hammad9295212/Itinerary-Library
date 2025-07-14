import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainArchivesComponent } from './pages/main-archives/main-archives.component';

const routes: Routes = [{ path: 'archives', component: MainArchivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivesRoutingModule {}
