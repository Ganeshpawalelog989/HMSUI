import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergydataComponent } from './allergydata.component';

describe('AllergydataComponent', () => {
  let component: AllergydataComponent;
  let fixture: ComponentFixture<AllergydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
