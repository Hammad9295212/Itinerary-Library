import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItinerariesComponent } from './itineraries.component';
import { AdvancedFiltersComponent } from './pages/advanced-filters/advanced-filters.component';
import { BranchedItinerariesComponent } from './pages/branched-itineraries/branched-itineraries.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { CreateItineraryDestinationComponent } from './pages/builder/pages/create-itinerary-destination/create-itinerary-destination.component';
import { CreateItineraryMemberDetailsComponent } from './pages/builder/pages/create-itinerary-member-details/create-itinerary-member-details.component';
import { CreateItineraryStartLocationComponent } from './pages/builder/pages/create-itinerary-start-location/create-itinerary-start-location.component';
import { CreateItineraryUserSearchComponent } from './pages/builder/pages/create-itinerary-user-search/create-itinerary-user-search.component';
import { CreateItineraryComponent } from './pages/builder/pages/create-itinerary/create-itinerary.component';
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
import { CommentRepliesComponent } from './pages/comment-replies/comment-replies.component';
import { CommentSearchComponent } from './pages/comments/comment-search/comment-search.component';
import { CommentsPageComponent } from './pages/comments/comments-page.component';
import { HandleUpdateCommentRequestComponent } from './pages/comments/handle-update-comment-request/handle-update-comment-request.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ItineraryAuthorHistoryComponent } from './pages/itinerary-author-history/itinerary-author-history.component';
import { DetailsComponent } from './pages/itinerary-detail/components/details/details.component';
import { MapComponent } from './pages/itinerary-detail/components/map/map.component';
import { SummaryComponent } from './pages/itinerary-detail/components/summary/summary.component';
import { ItineraryDetailComponent } from './pages/itinerary-detail/itinerary-detail.component';
import { FriendRequestsComponent } from './pages/itinerary-friends/friend-requests/friend-requests.component';
import { ItineraryFriendsComponent } from './pages/itinerary-friends/itinerary-friends.component';
import { ListFriendUsersComponent } from './pages/itinerary-friends/list-friend-users/list-friend-users.component';
import { SendFriendRequestComponent } from './pages/itinerary-friends/send-friend-request/send-friend-request.component';
import { AllPeopleComponent } from './pages/itinerary-members/all-people/all-people.component';
import { ItineraryMembersComponent } from './pages/itinerary-members/itinerary-members.component';
import { ItinerarySentInvitesComponent } from './pages/itinerary-members/itinerary-sent-invites/itinerary-sent-invites.component';
import { SendInviteComponent } from './pages/itinerary-members/send-invite/send-invite.component';
import { ItineraryUpvoteUsersComponent } from './pages/itinerary-upvote-users/itinerary-upvote-users.component';
import { ItineraryUsersComponent } from './pages/itinerary-users/itinerary-users.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { StoryComponent } from './pages/stories/story.component';
import { ItinerariesRoutesEnum } from '../../_enums/ItenariesRoutes.enum';
import { ItineraryWatchingUsersComponent } from './pages/itinerary-watching-users/itinerary-watching-users.component';
import { CreateItineraryDrawModeComponent } from './pages/builder/pages/create-itinerary-draw-mode/create-itinerary-draw-mode.component';
import { CreateItineraryDrawPreviewComponent } from './pages/builder/pages/create-itinerary-draw-preview/create-itinerary-draw-preview.component';
import { CreateItineraryNoVisualFilterComponent } from './pages/builder/pages/create-itinerary-no-visual-filter/create-itinerary-no-visual-filter.component';
import { CreateItineraryNoVisualPreviewComponent } from './pages/builder/pages/create-itinerary-no-visual-preview/create-itinerary-no-visual-preview.component';
const routes: Routes = [
  {
    path: '',
    component: ItinerariesComponent,
    children: [
      {
        path: '',
        redirectTo: ItinerariesRoutesEnum.EXPLORE,
        pathMatch: 'full',
      },
      { path: ItinerariesRoutesEnum.EXPLORE, component: ExploreComponent },
      { path: ItinerariesRoutesEnum.BUILDER, component: BuilderComponent },
      { path: ItinerariesRoutesEnum.FAVORITES, component: FavoritesComponent },
    ],
  },
  {
    path: ItinerariesRoutesEnum.CREATE_ITINERARY,
    component: CreateItineraryComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.LOCATION_PICKER}/:id`,
    component: LocationPickerComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.SUGGESTED_EVENTS_LOCATION}/:id`,
    component: SuggestedEventsLocationComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.SUGGESTED_EVENTS_ROUTE_TYPE}/:id`,
    component: SuggestedEventsRouteTypeComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.SUGGESTED_EVENTS_ROUTE_RADIUS}/:id`,
    component: SuggestedEventsRouteRadiusComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_ORIGIN}/:id`,
    component: CreateItineraryStartLocationComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE}/${ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE_CREATE}/:id`,
    component: CreateItineraryDrawModeComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE}/${ItinerariesRoutesEnum.CREATE_ITINERARY_DRAW_MODE_PREVIEW}/:id`,
    component: CreateItineraryDrawPreviewComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE}/${ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE_CREATE}/:id`,
    component: CreateItineraryNoVisualFilterComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE}/${ItinerariesRoutesEnum.CREATE_ITINERARY_NO_VISUAL_FILTER_MODE_PREVIEW}/:id`,
    component: CreateItineraryNoVisualPreviewComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_DESTINATION}/:id`,
    component: CreateItineraryDestinationComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.SELECT_ITINERARY_EVENTS}/:id`,
    component: SelectItineraryEventComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_USER_SEARCH}/:id`,
    component: CreateItineraryUserSearchComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATE_ITINERARY_MEMBER_DETAILS}/:id`,
    component: CreateItineraryMemberDetailsComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.SELECT_ITINERARY_ADD_PLACE}/:id`,
    component: ItineraryAddPlaceComponent,
    children: [
      {
        path: '',
        redirectTo: ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_BASIC_INFO,
        pathMatch: 'full',
      },
      {
        path: ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_BASIC_INFO,
        component: ItineraryPlaceBasicInfoComponent,
      },
      {
        path: ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_DATETIME,
        component: ItineraryPlaceDateTimeComponent,
      },
      {
        path: ItinerariesRoutesEnum.SELECT_ITINERARY_PLACE_MEMBERS,
        component: ItineraryPlaceMembersComponent,
      },
    ],
  },
  {
    path: `${ItinerariesRoutesEnum.CREATED_ITINERARY}/:id`,
    component: CreatedItineraryComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.CREATED_ITINERARY_PREVIEW}/:id`,
    component: CreatedItineraryPreviewComponent,
    children: [
      {
        path: '',
        redirectTo: ItinerariesRoutesEnum.CREATED_ITINERARY_DETAIL,
        pathMatch: 'full',
      },
      {
        path: ItinerariesRoutesEnum.CREATED_ITINERARY_DETAIL,
        component: CreatedItineraryDetailComponent,
      },
      {
        path: ItinerariesRoutesEnum.CREATED_ITINERARY_MAP,
        component: CreatedItineraryMapComponent,
      },
    ],
  },
  { path: ItinerariesRoutesEnum.STORIES, component: StoryComponent },
  {
    path: ItinerariesRoutesEnum.COMMENTS_ROUTE,
    component: CommentsPageComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.COMMENTS_ROUTE}/:id`,
    component: CommentsPageComponent,
  },
  {
    path: ItinerariesRoutesEnum.NOTIFICATIONS,
    component: NotificationsComponent,
  },
   {
    path: ItinerariesRoutesEnum.ITINERARY_WATCHING_USERS,
    component: ItineraryWatchingUsersComponent,
  },
  {
    path: ItinerariesRoutesEnum.COMMENT_UPDATE_REQUEST,
    component: HandleUpdateCommentRequestComponent,
  },
  {
    path: ItinerariesRoutesEnum.ITINERARY_MEMBERS,
    component: ItineraryMembersComponent,
  },
  {
    path: ItinerariesRoutesEnum.ALL_INVITES_SENT,
    component: ItinerarySentInvitesComponent,
  },
  { path: ItinerariesRoutesEnum.SEND_INVITE, component: SendInviteComponent },
  { path: ItinerariesRoutesEnum.All_PEOPLE, component: AllPeopleComponent },
  {
    path: ItinerariesRoutesEnum.BRANCHED_ITINERARIES,
    component: BranchedItinerariesComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.BRANCHED_ITINERARIES}/:id`,
    component: BranchedItinerariesComponent,
  },
  {
    path: ItinerariesRoutesEnum.COMMENT_SEARCH,
    component: CommentSearchComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.COMMENT_SEARCH}/${ItinerariesRoutesEnum.ADVANCED_FILTERS}`,
    component: AdvancedFiltersComponent,
  },
  {
    path: ItinerariesRoutesEnum.COMMENT_REPLIES,
    component: CommentRepliesComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_USERS}`,
    component: ItineraryUsersComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_UPVOTE_USERS}`,
    component: ItineraryUpvoteUsersComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_WATCHING_USERS}`,
    component: ItineraryUpvoteUsersComponent,
  },
  {
    path: `${ItinerariesRoutesEnum.ITINERARY_DETAIL}/${ItinerariesRoutesEnum.ITINERARY_AUTHOR_HISTORY}`,
    component: ItineraryAuthorHistoryComponent,
  },
  {
    path: ItinerariesRoutesEnum.ITINERARY_DETAIL,
    component: ItineraryDetailComponent,
    children: [
      {
        path: '',
        redirectTo: ItinerariesRoutesEnum.ITINERARY_SUMMARY,
        pathMatch: 'full',
      },
      {
        path: ItinerariesRoutesEnum.ITINERARY_SUMMARY,
        component: SummaryComponent,
      },
      {
        path: ItinerariesRoutesEnum.ITINERARY_MAP,
        component: MapComponent,
      },
      {
        path: ItinerariesRoutesEnum.ITINERARY_MORE_DETAIL,
        component: DetailsComponent,
      },
    ],
  },
  {
    path: ItinerariesRoutesEnum.ITINERARY_FRIENDS,
    component: ItineraryFriendsComponent,
  },
  {
    path: ItinerariesRoutesEnum.LIST_FRIENDS,
    component: ListFriendUsersComponent,
  },
  {
    path: ItinerariesRoutesEnum.FRIEND_REQUESTS,
    component: FriendRequestsComponent,
  },
  {
    path: ItinerariesRoutesEnum.SEND_FRIEND_REQUEST,
    component: SendFriendRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
