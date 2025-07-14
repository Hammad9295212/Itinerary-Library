import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSearchesItemComponent } from './recent-searches-item.component';

describe('RecentSearchesItemComponent', () => {
  let component: RecentSearchesItemComponent;
  let fixture: ComponentFixture<RecentSearchesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentSearchesItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentSearchesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
