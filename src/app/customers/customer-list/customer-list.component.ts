import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
OnClick(){
this.r.navigate(["customers/add"]);
}
  constructor(private r:Router) { }

  ngOnInit() {
  }

}
