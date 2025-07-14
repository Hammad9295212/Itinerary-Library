import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableBadgeComponent } from './selectable-badge.component';

describe('SelectableBadgeComponent', () => {
  let component: SelectableBadgeComponent;
  let fixture: ComponentFixture<SelectableBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectableBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectableBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
