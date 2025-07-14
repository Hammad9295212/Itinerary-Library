import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomCardComponent } from './cutom-card.component';

describe('CutomCardComponent', () => {
  let component: CutomCardComponent;
  let fixture: ComponentFixture<CutomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CutomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
