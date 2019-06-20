import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  company = "sam company";
  eno = 101;
  ename = "ravi";
  salary = 5000;
  empCompany = [
    { eno: 101, ename: "sundeep", salary: 5000, hobbies: ["watching Movies", "reading Books"] },
    { eno: 102, ename: "arun", salary: 6000, hobbies: ["watching Movies", "reading Books"] },

    { eno: 103, ename: "indira", salary: 7000, hobbies: ["watching Movies", "reading Books"] },

    { eno: 104, ename: "sridevi", salary: 8000, hobbies: ["watching Movies", "reading Books"] },
    { eno: 105, ename: "anurag", salary: 9000, hobbies: ["watching Movies", "reading Books"] },

  ]
  name = "3edge";
  value: any;
  ShowMe() {
    alert("welcome to " + this.name);
  }
  ChangeValue(evt) {
    this.value = evt.target.checked;
  }
  constructor() { }

  ngOnInit() {
  }

}
