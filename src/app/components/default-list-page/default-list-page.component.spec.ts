import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultListPageComponent } from './default-list-page.component';

describe('DefaultListPageComponent', () => {
  let component: DefaultListPageComponent;
  let fixture: ComponentFixture<DefaultListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
