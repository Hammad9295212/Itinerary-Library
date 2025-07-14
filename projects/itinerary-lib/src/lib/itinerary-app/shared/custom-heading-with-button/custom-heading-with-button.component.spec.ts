import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeadingWithButtonComponent } from './custom-heading-with-button.component';

describe('CustomHeadingWithButtonComponent', () => {
  let component: CustomHeadingWithButtonComponent;
  let fixture: ComponentFixture<CustomHeadingWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomHeadingWithButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomHeadingWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
