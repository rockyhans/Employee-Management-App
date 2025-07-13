import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { Employee } from './employee'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class EmployeeService { 
  private baseURL = "http://localhost:8080/employees"; 
 
  constructor(private httpClient: HttpClient) { } 
 
  // ✅ GET: List all employees
  getEmployeeList(): Observable<Employee[]> { 
    return this.httpClient.get<Employee[]>(`${this.baseURL}`); 
  } 
 
  // ✅ POST: Create a new employee
  createEmployee(employee: Employee): Observable<object> { 
    return this.httpClient.post(`${this.baseURL}`, employee); 
  } 
 
  // ✅ GET: Fetch single employee by ID
  getEmployeeById(empId: number): Observable<Employee> { 
    return this.httpClient.get<Employee>(`${this.baseURL}/${empId}`); 
  } 
 
  // ✅ PUT: Update employee by ID
  updateEmployee(empId: number, employee: Employee): Observable<Employee> { 
    return this.httpClient.put<Employee>(`${this.baseURL}/${empId}`, employee); 
  } 
 
  // ✅ DELETE: Delete employee by ID
  deleteEmployeeById(empId: number): Observable<object> { 
    return this.httpClient.delete(`${this.baseURL}/${empId}`); 
  } 
}
