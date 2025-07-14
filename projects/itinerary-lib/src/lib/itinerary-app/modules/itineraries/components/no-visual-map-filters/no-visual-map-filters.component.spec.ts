import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoVisualMapFiltersComponent } from './no-visual-map-filters.component';

describe('NoVisualMapFiltersComponent', () => {
  let component: NoVisualMapFiltersComponent;
  let fixture: ComponentFixture<NoVisualMapFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoVisualMapFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoVisualMapFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
