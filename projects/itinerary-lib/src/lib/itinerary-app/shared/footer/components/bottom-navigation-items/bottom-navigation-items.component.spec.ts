import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavigationItemsComponent } from './bottom-navigation-items.component';

describe('BottomNavigationItemsComponent', () => {
  let component: BottomNavigationItemsComponent;
  let fixture: ComponentFixture<BottomNavigationItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomNavigationItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BottomNavigationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
