import { Component, signal } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  public employees: Employee[] = [];
  public searchTerm: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployee().subscribe((response: Employee[]) => {
      this.employees = response;
    }, (error: HttpErrorResponse) => {
          console.error(error.message);
    });
  }

  public get filteredEmployees(): Employee[] {
    if (!this.searchTerm) {
      return this.employees;
    }
    const term = this.searchTerm.toLowerCase();
    return this.employees.filter(emp => 
      emp.name.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term) ||
      emp.jobTitle.toLowerCase().includes(term) ||
      emp.phone.includes(term)
    );
  }

  public onAddEmployee(addForm: NgForm): void {
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log('Employee added:', response);
        this.employees = [...this.employees, response];
        addForm.reset();
        // Close modal properly
        const modalElement = document.querySelector('.add-new') as HTMLElement;
        if (modalElement) {
          const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding employee:', error.message);
      }
    );
  }

  public onUpdateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log('Employee updated:', response);
        this.employees = this.employees.map(emp => 
          emp.id === response.id ? response : emp
        );
      },
      (error: HttpErrorResponse) => {
        console.error('Error updating employee:', error.message);
      }
    );
  }

  public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => {
        console.log('Employee deleted with ID:', employeeId);
        this.employees = this.employees.filter(emp => emp.id !== employeeId);
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting employee:', error.message);
      }
    );
  }

  public onSendMessage(contactForm: NgForm, employee: Employee): void {
    console.log('Message sent to:', employee.name);
    console.log('Subject:', contactForm.value.subject);
    console.log('Message:', contactForm.value.message);
    
    contactForm.reset();
    
    // Close modal
    const modalElement = document.querySelector(`#contactModal${employee.id}`) as HTMLElement;
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
}