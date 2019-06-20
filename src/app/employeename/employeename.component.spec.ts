import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeenameComponent } from './employeename.component';

describe('EmployeenameComponent', () => {
  let component: EmployeenameComponent;
  let fixture: ComponentFixture<EmployeenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
