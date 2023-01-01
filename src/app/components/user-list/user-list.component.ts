import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, ReplaySubject, combineLatest, switchMap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DepartmentModel } from '../../models/department.model';
import { RoleModel } from '../../models/role.model';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { DepartmentsService } from '../../services/departments.service';
import { RolesService } from '../../services/roles.service';

interface FilteredUser {
  id: string;
  email: string;
  roleId: number;
  department: string;
}

@Component({
  selector: 'app-user-list',
  styleUrls: ['./user-list.component.scss'],
  templateUrl: './user-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  readonly departments$: Observable<DepartmentModel[]> =
    this._departmentsService.getAll();
  readonly roles$: Observable<RoleModel[]> = this._rolesService.getAll();
  readonly userForm: FormGroup = new FormGroup({
    department: new FormControl(),
    role: new FormControl(),
  });
  private _departmentFilterSubject: ReplaySubject<DepartmentModel> =
    new ReplaySubject<DepartmentModel>();
  public departmentFilter$: Observable<DepartmentModel> =
    this._departmentFilterSubject.asObservable();
  private _roleFilterSubject: ReplaySubject<RoleModel> =
    new ReplaySubject<RoleModel>();
  public roleFilter$: Observable<RoleModel> =
    this._roleFilterSubject.asObservable();

  readonly users$: Observable<FilteredUser[]> = combineLatest([
    this._usersService.getAll(),
    this._departmentsService.getAll(),
    this.departmentFilter$,
    this.roleFilter$,
  ]).pipe(
    map(([allUsers, allDepartments, departmentFilter, roleFilter]) => {
      return allUsers
        .filter((user) => {
          return (
            user.departmentId === +departmentFilter.id &&
            user.roleId === roleFilter.id
          );
        })
        .map((user) => {
          const department = allDepartments.find(
            (d) => +d.id === user.departmentId
          )?.name;
          return {
            ...user,
            department: department,
          } as FilteredUser;
        });
    })
  );
  constructor(
    private _usersService: UsersService,
    private _departmentsService: DepartmentsService,
    private _rolesService: RolesService
  ) {
    this.userForm
      .get('department')
      ?.valueChanges.subscribe((value) =>
        this._departmentFilterSubject.next(value)
      );
    this.userForm
      .get('role')
      ?.valueChanges.subscribe((value) => this._roleFilterSubject.next(value));
  }
}
