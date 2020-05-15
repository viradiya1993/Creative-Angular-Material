import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagerListComponent } from './employee-manager-list.component';

describe('EmployeeManagerListComponent', () => {
  let component: EmployeeManagerListComponent;
  let fixture: ComponentFixture<EmployeeManagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeManagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
