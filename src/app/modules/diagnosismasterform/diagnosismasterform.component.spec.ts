import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosismasterformComponent } from './diagnosismasterform.component';

describe('DiagnosismasterformComponent', () => {
  let component: DiagnosismasterformComponent;
  let fixture: ComponentFixture<DiagnosismasterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosismasterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosismasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
