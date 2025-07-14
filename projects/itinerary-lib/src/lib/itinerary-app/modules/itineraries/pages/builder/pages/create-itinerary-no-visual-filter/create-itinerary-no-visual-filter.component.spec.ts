import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItineraryNoVisualFilterComponent } from './create-itinerary-no-visual-filter.component';

describe('CreateItineraryNoVisualFilterComponent', () => {
  let component: CreateItineraryNoVisualFilterComponent;
  let fixture: ComponentFixture<CreateItineraryNoVisualFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItineraryNoVisualFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItineraryNoVisualFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
