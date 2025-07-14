import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarDesktopComponent } from './app-sidebar-desktop.component';

describe('AppSidebarDesktopComponent', () => {
  let component: AppSidebarDesktopComponent;
  let fixture: ComponentFixture<AppSidebarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSidebarDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSidebarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
