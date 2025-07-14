import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryUsersComponent } from './itinerary-users.component';

describe('ItineraryUsersComponent', () => {
  let component: ItineraryUsersComponent;
  let fixture: ComponentFixture<ItineraryUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
