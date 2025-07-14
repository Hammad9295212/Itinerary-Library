import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachBottomBarComponent } from './serach-bottom-bar.component';

describe('SerachBottomBarComponent', () => {
  let component: SerachBottomBarComponent;
  let fixture: ComponentFixture<SerachBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerachBottomBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SerachBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
