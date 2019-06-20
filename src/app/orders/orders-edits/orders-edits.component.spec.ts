import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersEditsComponent } from './orders-edits.component';

describe('OrdersEditsComponent', () => {
  let component: OrdersEditsComponent;
  let fixture: ComponentFixture<OrdersEditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersEditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
