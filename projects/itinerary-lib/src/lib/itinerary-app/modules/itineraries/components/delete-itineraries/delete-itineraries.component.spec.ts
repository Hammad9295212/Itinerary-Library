import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItinerariesComponent } from './delete-itineraries.component';

describe('DeleteItinerariesComponent', () => {
  let component: DeleteItinerariesComponent;
  let fixture: ComponentFixture<DeleteItinerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteItinerariesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
