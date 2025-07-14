import { Component } from '@angular/core';

@Component({
  selector: 'app-itinerary-watching-users',
  templateUrl: './itinerary-watching-users.component.html',
  styleUrl: './itinerary-watching-users.component.css'
})
export class ItineraryWatchingUsersComponent {
  backButton(){
    window.history.back();
  }
}
