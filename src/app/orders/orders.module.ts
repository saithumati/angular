import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersAddComponent } from './orders-add/orders-add.component';
import { OrdersEditsComponent } from './orders-edits/orders-edits.component';
import{ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [OrderListComponent, OrdersAddComponent, OrdersEditsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
