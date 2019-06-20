import { Component, OnInit } from '@angular/core';
import{FormControl} from "@angular/forms";
import{FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.css']
})
export class OrdersAddComponent implements OnInit {
orderForms:FormGroup
orderList=[];
  indexValue: any;
  constructor(private r:Router) { }

  ngOnInit() {
    this.orderForms=new FormGroup({
      FirstName:new FormControl(),
      LastName:new FormControl(),
      EmailId:new FormControl(),
      PhoneNumber:new FormControl()
    });
  }
save(){
 this.orderList.push(this.orderForms.value);
}
update(data){
this.orderForms[this.indexValue].FullName=data.FullName,
this.orderForms[this.indexValue].LastName=data.LastName,
this.orderForms[this.indexValue].EmailId=data.EmailId,
this.orderForms[this.indexValue].PhoneNumber=data.PhoneNumber
}
back(){
this.r.navigate(["orders"])
}
Edit(data,index){
this.indexValue=index;
this.orderForms.patchValue({
  FullName:data.FullName,
  LastName:data.LastName,
  EmailId:data.EmailId,
  PhoneNumber:data.PhoneNumber
})
}
Delete(){

}
}
