import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportItineraryModalComponent } from './report-itinerary-modal.component';

describe('ReportItineraryModalComponent', () => {
  let component: ReportItineraryModalComponent;
  let fixture: ComponentFixture<ReportItineraryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportItineraryModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportItineraryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
