import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItineraryNoVisualPreviewComponent } from './create-itinerary-no-visual-preview.component';

describe('CreateItineraryNoVisualPreviewComponent', () => {
  let component: CreateItineraryNoVisualPreviewComponent;
  let fixture: ComponentFixture<CreateItineraryNoVisualPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItineraryNoVisualPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItineraryNoVisualPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
