import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-form',
  styleUrls: ['./employee-form.component.scss'],
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  constructor(private _employeesService: EmployeesService) {}

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    if (employeeForm.invalid) {
      return;
    }
    this._employeesService
      .create({
        name: employeeForm.get('name')?.value,
        salary: employeeForm.get('salary')?.value,
        age: employeeForm.get('age')?.value,
      })
      .subscribe();
  }
}
