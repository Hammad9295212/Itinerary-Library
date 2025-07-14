import { Component } from '@angular/core';

@Component({
  selector: 'app-itinerary-upvote-users',
  templateUrl: './itinerary-upvote-users.component.html',
  styleUrl: './itinerary-upvote-users.component.css'
})
export class ItineraryUpvoteUsersComponent {

  backButton(){
    window.history.back();
  }
}
