import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchedItinerariesComponent } from './branched-itineraries.component';

describe('BranchedItinerariesComponent', () => {
  let component: BranchedItinerariesComponent;
  let fixture: ComponentFixture<BranchedItinerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchedItinerariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchedItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
