import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduremasterformComponent } from './proceduremasterform.component';

describe('ProceduremasterformComponent', () => {
  let component: ProceduremasterformComponent;
  let fixture: ComponentFixture<ProceduremasterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduremasterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduremasterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
