import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItineraryDrawPreviewComponent } from './create-itinerary-draw-preview.component';

describe('CreateItineraryDrawPreviewComponent', () => {
  let component: CreateItineraryDrawPreviewComponent;
  let fixture: ComponentFixture<CreateItineraryDrawPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItineraryDrawPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItineraryDrawPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
