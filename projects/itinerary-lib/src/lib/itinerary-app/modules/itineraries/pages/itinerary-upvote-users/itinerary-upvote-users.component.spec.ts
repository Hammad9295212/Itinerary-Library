import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryUpvoteUsersComponent } from './itinerary-upvote-users.component';

describe('ItineraryUpvoteUsersComponent', () => {
  let component: ItineraryUpvoteUsersComponent;
  let fixture: ComponentFixture<ItineraryUpvoteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryUpvoteUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryUpvoteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
