import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersAddComponent } from './orders-add/orders-add.component';
import { OrdersEditsComponent } from './orders-edits/orders-edits.component';

const routes: Routes = [
  {path:'order-list',component:OrderListComponent},
  {path:'order-add',component:OrdersAddComponent},
  {path:'orders-edit',component:OrdersEditsComponent},
  {path:'',component:OrderListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
