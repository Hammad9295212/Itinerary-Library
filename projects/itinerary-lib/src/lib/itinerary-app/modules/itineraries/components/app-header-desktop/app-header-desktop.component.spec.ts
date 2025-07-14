import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderDesktopComponent } from './app-header-desktop.component';

describe('AppHeaderDesktopComponent', () => {
  let component: AppHeaderDesktopComponent;
  let fixture: ComponentFixture<AppHeaderDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppHeaderDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHeaderDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
