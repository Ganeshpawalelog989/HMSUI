import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduredataComponent } from './proceduredata.component';

describe('ProceduredataComponent', () => {
  let component: ProceduredataComponent;
  let fixture: ComponentFixture<ProceduredataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduredataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
