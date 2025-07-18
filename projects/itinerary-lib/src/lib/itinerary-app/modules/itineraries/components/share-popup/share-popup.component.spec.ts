import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePopupComponent } from './share-popup.component';

describe('SharePopupComponent', () => {
  let component: SharePopupComponent;
  let fixture: ComponentFixture<SharePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
