import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryWatchingUsersComponent } from './itinerary-watching-users.component';

describe('ItineraryWatchingUsersComponent', () => {
  let component: ItineraryWatchingUsersComponent;
  let fixture: ComponentFixture<ItineraryWatchingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryWatchingUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryWatchingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
