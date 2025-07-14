import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItineraryModalComponent } from './create-itinerary-modal.component';

describe('CreateItineraryModalComponent', () => {
  let component: CreateItineraryModalComponent;
  let fixture: ComponentFixture<CreateItineraryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItineraryModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateItineraryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
