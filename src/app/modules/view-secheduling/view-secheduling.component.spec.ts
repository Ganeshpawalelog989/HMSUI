import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSechedulingComponent } from './view-secheduling.component';

describe('ViewSechedulingComponent', () => {
  let component: ViewSechedulingComponent;
  let fixture: ComponentFixture<ViewSechedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSechedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSechedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
