import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  imports: [CommonModule, FormsModule],
})
export class UpdateEmployeeComponent implements OnInit {
  empId: number = 0;
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.empId).subscribe((data) => {
      this.employee = data;
    });
  }

  onSubmit() {
    this.employeeService
      .updateEmployee(this.empId, this.employee)
      .subscribe((data) => {
        this.employee = data;
        this.goToEmployeeList();
      });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
