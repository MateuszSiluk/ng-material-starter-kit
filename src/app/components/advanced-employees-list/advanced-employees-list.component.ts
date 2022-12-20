import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

type AgeRange = '0-20' | '21-30' | '31-40' | '41-50' | '51-100' | 'All';
enum Sort {
  ASC = 'asc',
  DESC = 'desc',
}

@Component({
  selector: 'app-advanced-employees-list',
  templateUrl: './advanced-employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedEmployeesListComponent {
  constructor(private _employeesService: EmployeesService) {}

  private _ageRangeMap = new Map<AgeRange, { from: number; to: number }>([
    ['0-20', { from: 0, to: 20 }],
    ['21-30', { from: 21, to: 30 }],
    ['31-40', { from: 31, to: 40 }],
    ['41-50', { from: 41, to: 50 }],
    ['51-100', { from: 51, to: 100 }],
    ['All', { from: 0, to: 100 }],
  ]);

  public employeeAscDesc$: Observable<string[]> = of([Sort.ASC, Sort.DESC]);
  public ageRange$: Observable<AgeRange[]> = of(
    Array.from(this._ageRangeMap.keys())
  );
  readonly employees$: Observable<EmployeeModel[]> =
    this._employeesService.getAll();

  private _employeeSortSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(Sort.ASC);
  public employeeSalarySort$: Observable<string> =
    this._employeeSortSubject.asObservable();
  private _ageSortSubject: BehaviorSubject<AgeRange> =
    new BehaviorSubject<AgeRange>('All');
  public ageSort$: Observable<AgeRange> = this._ageSortSubject.asObservable();

  readonly employeeData$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.employeeSalarySort$,
    this.ageSort$,
  ]).pipe(
    map(
      ([employee, salarySort, ageSort]: [EmployeeModel[], string, AgeRange]) =>
        employee
          .filter(
            (emp) =>
              emp.employee_age >= this._ageRangeMap.get(ageSort)!.from &&
              emp.employee_age <= this._ageRangeMap.get(ageSort)!.to
          )
          .sort((a, b) =>
            salarySort === Sort.ASC
              ? b.employee_salary - a.employee_salary
              : a.employee_salary - b.employee_salary
          )
    )
  );
  sortSalary(salary: string): void {
    this._employeeSortSubject.next(salary);
  }
  sortAge(age: AgeRange): void {
    this._ageSortSubject.next(age);
  }
}
