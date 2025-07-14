import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  ButtonsModule,
  DashedCheckboxModule,
  DirectiveModule,
  FooterSharedComponent,
  FormFieldModule,
  GridFiltersModule,
  GridModule,
  ImageDeckComponent,
  InfoCardPlaceholderModule,
  InputFieldModule,
  InputFieldSelectModule,
  LibMapModule,
  LibModalModule,
  LibPercentageBarModule,
  LibTabMenuModule,
  LibToastrModule,
  LibToastrStackModule,
  NotificationsModule,
  ProgressBarModule,
  RangeSelectorModule,
  SearchBarModule,
  SectionSeparatorComponent,
  SelectableModule,
  TextBoxComponent,
  ToggleModule,
  UserMenuComponent
} from 'nextsapien-component-lib';  
import { SharedModule } from '../../shared/shared.module';
import { DeleteItinerariesComponent } from './components/delete-itineraries/delete-itineraries.component';
import { FilterMenuComponent } from './components/filter-menu/filter-menu.component';
import { ReportItineraryModalComponent } from './components/report-itinerary-modal/report-itinerary-modal.component';
import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItinerariesComponent } from './itineraries.component';
import { AdvancedFiltersComponent } from './pages/advanced-filters/advanced-filters.component';
import { BranchedItinerariesComponent } from './pages/branched-itineraries/branched-itineraries.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { CreateItineraryModalItemComponent } from './pages/builder/components/create-itinerary-modal-item/create-itinerary-modal-item.component';
import { CreateItineraryModalComponent } from './pages/builder/components/create-itinerary-modal/create-itinerary-modal.component';
import { CreateItineraryComponent } from './pages/builder/pages/create-itinerary/create-itinerary.component';
import { CommentRepliesComponent } from './pages/comment-replies/comment-replies.component';
import { CommentSingleComponent } from './pages/comment-replies/components/comment-single/comment-single.component';
import { CommentComparisonComponent } from './pages/comments/comment-comparison/comment-comparison.component';
import { CommentSearchComponent } from './pages/comments/comment-search/comment-search.component';
import { CommentsPageComponent } from './pages/comments/comments-page.component';
import { HandleUpdateCommentRequestComponent } from './pages/comments/handle-update-comment-request/handle-update-comment-request.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { DetailsComponent } from './pages/itinerary-detail/components/details/details.component';
import { MapComponent } from './pages/itinerary-detail/components/map/map.component';
import { SummaryComponent } from './pages/itinerary-detail/components/summary/summary.component';
import { ItineraryDetailComponent } from './pages/itinerary-detail/itinerary-detail.component';

import { ItineraryAuthorHistoryComponent } from './pages/itinerary-author-history/itinerary-author-history.component';
import { ItineraryUpvoteUsersComponent } from './pages/itinerary-upvote-users/itinerary-upvote-users.component';
import { ItineraryUsersComponent } from './pages/itinerary-users/itinerary-users.component';
import { ItineraryWatchingUsersComponent } from './pages/itinerary-watching-users/itinerary-watching-users.component';

import { ExistingFriendsComponent } from './pages/itinerary-friends/existing-friends/existing-friends.component';
import { FriendRequestsComponent } from './pages/itinerary-friends/friend-requests/friend-requests.component';
import { ItineraryFriendsComponent } from './pages/itinerary-friends/itinerary-friends.component';
import { ListFriendUsersComponent } from './pages/itinerary-friends/list-friend-users/list-friend-users.component';
import { SendFriendRequestComponent } from './pages/itinerary-friends/send-friend-request/send-friend-request.component';
import { AllPeopleComponent } from './pages/itinerary-members/all-people/all-people.component';
import { ExistingMembersComponent } from './pages/itinerary-members/existing-members/existing-members.component';
import { ItineraryMembersComponent } from './pages/itinerary-members/itinerary-members.component';

import { IonicModule } from '@ionic/angular';
import { CreateItineraryDestinationComponent } from './pages/builder/pages/create-itinerary-destination/create-itinerary-destination.component';
import { CreateItineraryHeaderComponent } from './pages/builder/pages/create-itinerary-header/create-itinerary-header.component';
import { CreateItineraryMemberDetailsComponent } from './pages/builder/pages/create-itinerary-member-details/create-itinerary-member-details.component';
import { CreateItineraryStartLocationComponent } from './pages/builder/pages/create-itinerary-start-location/create-itinerary-start-location.component';
import { CreateItineraryUserSearchComponent } from './pages/builder/pages/create-itinerary-user-search/create-itinerary-user-search.component';
import { CreatedItineraryDetailComponent } from './pages/builder/pages/created-itinerary-preview/created-itinerary-detail/created-itinerary-detail.component';
import { CreatedItineraryMapComponent } from './pages/builder/pages/created-itinerary-preview/created-itinerary-map/created-itinerary-map.component';
import { CreatedItineraryPreviewComponent } from './pages/builder/pages/created-itinerary-preview/created-itinerary-preview.component';
import { CreatedItineraryComponent } from './pages/builder/pages/created-itinerary/created-itinerary.component';
import { ItineraryAddPlaceComponent } from './pages/builder/pages/itinerary-add-place/itinerary-add-place.component';
import { ItineraryPlaceBasicInfoComponent } from './pages/builder/pages/itinerary-add-place/itinerary-place-basic-info/itinerary-place-basic-info.component';
import { ItineraryPlaceDateTimeComponent } from './pages/builder/pages/itinerary-add-place/itinerary-place-date-time/itinerary-place-date-time.component';
import { ItineraryPlaceMembersComponent } from './pages/builder/pages/itinerary-add-place/itinerary-place-members/itinerary-place-members.component';
import { LocationPickerComponent } from './pages/builder/pages/location-picker/location-picker.component';
import { SelectItineraryEventComponent } from './pages/builder/pages/select-itinerary-event/select-itinerary-event.component';
import { SuggestedEventsLocationComponent } from './pages/builder/pages/suggested-events-location/suggested-events-location.component';
import { SuggestedEventsRouteRadiusComponent } from './pages/builder/pages/suggested-events-route-radius/suggested-events-route-radius.component';
import { SuggestedEventsRouteTypeComponent } from './pages/builder/pages/suggested-events-route-type/suggested-events-route-type.component';
import { ItinerarySentInvitesComponent } from './pages/itinerary-members/itinerary-sent-invites/itinerary-sent-invites.component';
import { SendInviteComponent } from './pages/itinerary-members/send-invite/send-invite.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { StoryComponent } from './pages/stories/story.component';   
import { environment } from '../../../../environments/environment';
import { SendToClientComponent } from './components/send-to-client/send-to-client.component';
import { SharePopupComponent } from './components/share-popup/share-popup.component';
import { CreateItineraryDrawModeComponent } from './pages/builder/pages/create-itinerary-draw-mode/create-itinerary-draw-mode.component';
import { CreateItineraryDrawPreviewComponent } from './pages/builder/pages/create-itinerary-draw-preview/create-itinerary-draw-preview.component';
import { CreateItineraryNoVisualFilterComponent } from './pages/builder/pages/create-itinerary-no-visual-filter/create-itinerary-no-visual-filter.component';
import { CreateItineraryNoVisualPreviewComponent } from './pages/builder/pages/create-itinerary-no-visual-preview/create-itinerary-no-visual-preview.component';
import { AppHeaderDesktopComponent } from './components/app-header-desktop/app-header-desktop.component';
import { AppSidebarDesktopComponent } from './components/app-sidebar-desktop/app-sidebar-desktop.component';
import { NoVisualMapFiltersComponent } from './components/no-visual-map-filters/no-visual-map-filters.component';

@NgModule({
  declarations: [
    ItinerariesComponent,
    FilterMenuComponent,
    ExploreComponent,
    BuilderComponent,
    FavoritesComponent,
    ReportItineraryModalComponent,
    CreateItineraryModalComponent,
    CreateItineraryModalItemComponent,
    DeleteItinerariesComponent,
    NoVisualMapFiltersComponent,
    SendToClientComponent,
    BranchedItinerariesComponent,
    ItineraryDetailComponent,
    MapComponent,
    SummaryComponent,
    CommentSearchComponent,
    DetailsComponent,
    SendInviteComponent,
    StoryComponent,
    ItinerarySentInvitesComponent,
    CommentsPageComponent,
    NotificationsComponent,
    HandleUpdateCommentRequestComponent,
    ItineraryMembersComponent,
    ExistingMembersComponent,
    AllPeopleComponent,
    FriendRequestsComponent,
    SendFriendRequestComponent,
    ItineraryFriendsComponent,
    ExistingFriendsComponent,
    ListFriendUsersComponent,
    CommentComparisonComponent,
    FriendRequestsComponent,
    CommentRepliesComponent,
    CommentSingleComponent,
    ItineraryUsersComponent,
    ItineraryWatchingUsersComponent,
    ItineraryUpvoteUsersComponent,
    ItineraryAuthorHistoryComponent,
    AdvancedFiltersComponent,
    CreateItineraryComponent,
    CreateItineraryStartLocationComponent,
    CreateItineraryDestinationComponent,
    SelectItineraryEventComponent,
    ItineraryAddPlaceComponent,
    ItineraryPlaceBasicInfoComponent,
    ItineraryPlaceDateTimeComponent,
    ItineraryPlaceMembersComponent,
    CreateItineraryUserSearchComponent,
    CreateItineraryMemberDetailsComponent,
    LocationPickerComponent,
    SuggestedEventsLocationComponent,
    SuggestedEventsRouteTypeComponent,
    SuggestedEventsRouteRadiusComponent,
    CreatedItineraryComponent,
    CreatedItineraryPreviewComponent,
    CreatedItineraryDetailComponent,
    CreatedItineraryMapComponent,
    CreateItineraryHeaderComponent,
    SharePopupComponent,
    CreateItineraryDrawModeComponent,
    CreateItineraryDrawPreviewComponent,
    CreateItineraryNoVisualFilterComponent,
    CreateItineraryNoVisualPreviewComponent,
    AppHeaderDesktopComponent,
    AppSidebarDesktopComponent,
    NoVisualMapFiltersComponent
  ],
  exports: [FilterMenuComponent, DeleteItinerariesComponent, NoVisualMapFiltersComponent, SendToClientComponent],
  imports: [
    CommonModule,
    IonicModule,
    ItinerariesRoutingModule,
    SelectableModule,
    ReactiveFormsModule,
    InfoCardPlaceholderModule,
    LibTabMenuModule,
    ButtonsModule,
    ToggleModule,
    NgOptimizedImage,
    SharedModule,
    LibModalModule,
    FormFieldModule,
    DirectiveModule,
    FormsModule,
    TextBoxComponent,
    LibPercentageBarModule,
    DashedCheckboxModule,
    TranslateModule,
    SearchBarModule,
    NotificationsModule,
    LibToastrModule,
    GoogleMapsModule,
    InputFieldSelectModule,
    GridModule,
    SectionSeparatorComponent,
    GridFiltersModule,
    MatIcon,
    DirectiveModule,
    ImageDeckComponent,
    LibToastrStackModule,
    ProgressBarModule,
    FooterSharedComponent,
    RangeSelectorModule,
    InputFieldModule,
    UserMenuComponent,
    LibMapModule.forRoot({
      googleMapsKey: environment.googleMapsKey,
      googleMapsURL: environment.googleMapsURL,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GoogleMap],
})
export class ItinerariesModule {}
