import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  employeeForm: FormGroup
  employeeList = [];
  indexValue: any;
  constructor(private r: Router) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      FullName: new FormControl(),
      Email: new FormControl()
    })
  }
  save() {
    this.employeeList.push(this.employeeForm.value)
  }
  goback() {
    this.r.navigate(["customer"]);
  }
  edit(data, index) {
    this.indexValue = index;
    this.employeeForm.patchValue({
      FullName: data.FullName,
      Email: data.Email
    })
  }
  update(data) {
    this.employeeList[this.indexValue].FullName = data.FullName;
    this.employeeList[this.indexValue].email = data.Email;
  }
  delete(data) {
    this.employeeList.splice(this.indexValue, 1)
  }
}
