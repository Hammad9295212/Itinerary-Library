import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItineraryModalItemComponent } from './create-itinerary-modal-item.component';

describe('CreateItineraryModalItemComponent', () => {
  let component: CreateItineraryModalItemComponent;
  let fixture: ComponentFixture<CreateItineraryModalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItineraryModalItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateItineraryModalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
