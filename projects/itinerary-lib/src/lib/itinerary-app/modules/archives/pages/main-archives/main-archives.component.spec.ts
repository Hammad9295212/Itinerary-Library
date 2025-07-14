import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArchivesComponent } from './main-archives.component';

describe('MainArchivesComponent', () => {
  let component: MainArchivesComponent;
  let fixture: ComponentFixture<MainArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainArchivesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
