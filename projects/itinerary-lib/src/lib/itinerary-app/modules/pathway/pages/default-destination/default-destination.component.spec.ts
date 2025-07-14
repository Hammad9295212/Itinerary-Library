import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDestinationComponent } from './default-destination.component';

describe('DefaultDestinationComponent', () => {
  let component: DefaultDestinationComponent;
  let fixture: ComponentFixture<DefaultDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultDestinationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
