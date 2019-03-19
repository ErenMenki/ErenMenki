import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deneme2Component } from './deneme2.component';

describe('Deneme2Component', () => {
  let component: Deneme2Component;
  let fixture: ComponentFixture<Deneme2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deneme2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deneme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
