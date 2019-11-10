import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sib3Component } from './sib3.component';

describe('Sib3Component', () => {
  let component: Sib3Component;
  let fixture: ComponentFixture<Sib3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sib3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sib3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
