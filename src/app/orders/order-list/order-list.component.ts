import { Component, OnInit } from '@angular/core';
;
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  Onclick(){
    this.r.navigate(["orders/order-add"]);
  }
  constructor(private r:Router) { }

  ngOnInit() {
  }

}
