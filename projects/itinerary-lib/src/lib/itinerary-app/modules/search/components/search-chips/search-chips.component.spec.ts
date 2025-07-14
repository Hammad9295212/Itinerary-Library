import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChipsComponent } from './search-chips.component';

describe('SearchChipsComponent', () => {
  let component: SearchChipsComponent;
  let fixture: ComponentFixture<SearchChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchChipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
