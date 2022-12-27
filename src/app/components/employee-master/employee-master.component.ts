import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-master',
  styleUrls: ['./employee-master.component.scss'],
  templateUrl: './employee-master.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeMasterComponent {
  readonly employees$: Observable<EmployeeModel[]> =
    this._employeesService.getAll();
  private _selectedEmployeeIdSubject: Subject<number> = new Subject<number>();
  public selectedEmployeeId$: Observable<number> =
    this._selectedEmployeeIdSubject.asObservable();
  readonly salaryDetials$: Observable<EmployeeModel> =
    this.selectedEmployeeId$.pipe(
      switchMap((data) => this._employeesService.getOne(data))
    );

  constructor(private _employeesService: EmployeesService) {}

  selectEmployee(id: number): void {
    this._selectedEmployeeIdSubject.next(id);
  }
}
