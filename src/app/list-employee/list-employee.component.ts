import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
  imports: [
    CommonModule, 
  ],
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }

  updateEmployee(empId: number) {
    this.router.navigate(['update-employee', empId]);
  }

  deleteEmployee(empId: number) {
    this.employeeService.deleteEmployeeById(empId).subscribe((data) => {
      console.log(data);
      this.getEmployees();
    });
  }
}
