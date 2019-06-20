import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeenameComponent } from './employeename/employeename.component';

const routes: Routes = [
  {path:'employee-list',component:EmployeeListComponent},
  {path:"employee-name",component:EmployeenameComponent},
  {path:"",redirectTo:"/employee-list",pathMatch:'full'},
  {path:"customers",loadChildren:"./customers/customers.module#CustomersModule"},
  {path:"orders",loadChildren:"./orders/orders.module#OrdersModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
