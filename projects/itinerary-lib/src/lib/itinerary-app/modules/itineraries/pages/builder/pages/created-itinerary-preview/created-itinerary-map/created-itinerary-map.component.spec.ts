import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedItineraryMapComponent } from './created-itinerary-map.component';

describe('CreatedItineraryMapComponent', () => {
  let component: CreatedItineraryMapComponent;
  let fixture: ComponentFixture<CreatedItineraryMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedItineraryMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatedItineraryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
