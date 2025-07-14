import { Component } from '@angular/core';

@Component({
  selector: 'app-itinerary-users',
  templateUrl: './itinerary-users.component.html',
  styleUrl: './itinerary-users.component.css'
})
export class ItineraryUsersComponent {
  backButton(){
    window.history.back();
  }
}
