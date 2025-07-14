import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItineraryDrawModeComponent } from './create-itinerary-draw-mode.component';

describe('CreateItineraryDrawModeComponent', () => {
  let component: CreateItineraryDrawModeComponent;
  let fixture: ComponentFixture<CreateItineraryDrawModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItineraryDrawModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItineraryDrawModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
