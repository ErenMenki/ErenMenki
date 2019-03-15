import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecomboComponent } from './datecombo.component';

describe('DatecomboComponent', () => {
  let component: DatecomboComponent;
  let fixture: ComponentFixture<DatecomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatecomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
