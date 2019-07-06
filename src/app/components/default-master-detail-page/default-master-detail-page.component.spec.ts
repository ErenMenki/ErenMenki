import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMasterDetailPageComponent } from './default-master-detail-page.component';

describe('DefaultMasterDetailPageComponent', () => {
  let component: DefaultMasterDetailPageComponent;
  let fixture: ComponentFixture<DefaultMasterDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultMasterDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMasterDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
