import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import {
  BaseCardModule,
  ButtonsModule,
  CircleProgressModule,
  ContentViewCardModule,
  DashedCheckboxModule,
  FormFieldModule,
  FormGeneratorModule,
  GridModule,
  ImageCardModule,
  ImageDeckComponent,
  InfoCardListModule,
  InfoCardModule,
  InfoCardPlaceholderModule,
  InputDateFieldModule,
  LibMapModule,
  LibModalModule,
  LibTabMenuModule,
  LibToastrModule,
  NotificationsModule,
  OtpInputModule,
  PopperModule,
  SearchBarModule,
  SelectableModule,
} from 'nextsapien-component-lib';  
import { CardComponent } from './card-component/card-component.component';
import { CommentImagesComponent } from './comment/comment-images/comment-images.component';
import { CommentComponent } from './comment/comment.component';
import { CustomHeadingWithButtonComponent } from './custom-heading-with-button/custom-heading-with-button.component';
import { CustomStoryCardComponent } from './custom-story-card/custom-story-card.component';
import { CutomCardComponent } from './cutom-card/cutom-card.component';
import { BottomNavigationItemsComponent } from './footer/components/bottom-navigation-items/bottom-navigation-items.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { NotificationTileComponent } from './notification-tile/notification-tile.component';
import { SearchPopupComponent } from './search-popup/search-popup.component';
import { SwiperDialogComponent } from './swiper-dialog/swiper-dialog.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { UserStackTileComponent } from './user-stack-tile/user-stack-tile.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { UsersStackComponent } from './users-stack/users-stack.component';
import { VotesPipe } from '../_pipes/votes.pipe';
import { MatchingClientsComponent } from './matching-clients/matching-clients.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { SelectableBadgeComponent } from './selectable-badge/selectable-badge.component';

@NgModule({
  declarations: [
    CardComponent,
    CustomHeadingWithButtonComponent,
    CutomCardComponent,
    CustomStoryCardComponent,
    CommentComponent,
    NotificationTileComponent,
    UsersStackComponent,
    UserStackTileComponent,
    UserTileComponent,
    SearchPopupComponent,
    CommentImagesComponent,
    FooterComponent,
    HeaderComponent,
    TabBarComponent,
    ImageViewerComponent,
    SwiperDialogComponent,
    BottomNavigationItemsComponent,
    VotesPipe,
    MatchingClientsComponent,
    IconButtonComponent,
    ActionCardComponent,
    SelectableBadgeComponent
  ],
  exports: [
    CardComponent,
    CustomHeadingWithButtonComponent,
    CutomCardComponent,
    CustomStoryCardComponent,
    CommentComponent,
    NotificationTileComponent,
    UsersStackComponent,
    UserStackTileComponent,
    UserTileComponent,
    SearchPopupComponent,
    ImageViewerComponent,
    TabBarComponent,
    HeaderComponent,
    FooterComponent,
    BottomNavigationItemsComponent,
    MatchingClientsComponent,
    IconButtonComponent,
    ActionCardComponent,
    SelectableBadgeComponent
  ],
  imports: [
    BaseCardModule,
    TranslateModule,
    CommonModule,
    SearchBarModule,
    ButtonsModule,
    CircleProgressModule,
    OtpInputModule,
    DashedCheckboxModule,
    FormFieldModule,
    FormsModule,
    FormGeneratorModule,
    GridModule,
    ImageCardModule,
    InfoCardModule,
    InfoCardListModule,
    InfoCardPlaceholderModule,
    InputDateFieldModule,
    LibMapModule,
    PopperModule,
    SearchBarModule,
    HttpClientModule,
    NgOptimizedImage,
    LibTabMenuModule,
    LibModalModule,
    IonicModule,
    ContentViewCardModule,
    NotificationsModule,
    LibToastrModule,
    SelectableModule,
    ImageDeckComponent,
    CircleProgressModule,
    ImageDeckComponent,    
    RouterLink,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
