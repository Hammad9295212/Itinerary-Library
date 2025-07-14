import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SectionSeparatorComponent, SelectableModule } from 'nextsapien-component-lib';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SectionSeparatorComponent,
    SharedModule,
    TranslateModule,
    SelectableModule
]
})
export class UserModule { }
