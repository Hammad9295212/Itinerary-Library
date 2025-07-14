import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryAuthorHistoryComponent } from './itinerary-author-history.component';

describe('ItineraryAuthorHistoryComponent', () => {
  let component: ItineraryAuthorHistoryComponent;
  let fixture: ComponentFixture<ItineraryAuthorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryAuthorHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryAuthorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
