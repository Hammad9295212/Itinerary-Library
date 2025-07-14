import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachClearHistoryComponent } from './serach-clear-history.component';

describe('SerachClearHistoryComponent', () => {
  let component: SerachClearHistoryComponent;
  let fixture: ComponentFixture<SerachClearHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerachClearHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SerachClearHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
