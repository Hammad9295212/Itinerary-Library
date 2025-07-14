import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingClientsComponent } from './matching-clients.component';

describe('MatchingUsersComponent', () => {
  let component: MatchingClientsComponent;
  let fixture: ComponentFixture<MatchingClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchingClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatchingClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
