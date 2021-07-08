import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleryComponent } from './allery.component';

describe('AlleryComponent', () => {
  let component: AlleryComponent;
  let fixture: ComponentFixture<AlleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
