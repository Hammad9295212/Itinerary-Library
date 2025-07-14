import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVisualMapFilterComponent } from './non-visual-map-filter.component';

describe('NonVisualMapFilterComponent', () => {
  let component: NonVisualMapFilterComponent;
  let fixture: ComponentFixture<NonVisualMapFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonVisualMapFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NonVisualMapFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
