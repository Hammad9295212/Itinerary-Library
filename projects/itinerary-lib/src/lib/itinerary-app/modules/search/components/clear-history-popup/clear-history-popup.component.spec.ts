import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearHistoryPopupComponent } from './clear-history-popup.component';

describe('ClearHistoryPopupComponent', () => {
  let component: ClearHistoryPopupComponent;
  let fixture: ComponentFixture<ClearHistoryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearHistoryPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClearHistoryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
