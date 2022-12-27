import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient
      .get<EmployeesResponse>(
        `https://dummy.restapiexample.com/api/v1/employees`
      )
      .pipe(map((response: EmployeesResponse) => response.data));
  }

  getOne(id: number): Observable<EmployeeModel> {
    return this._httpClient
      .get<EmployeeResponse>(
        `https://dummy.restapiexample.com/api/v1/employee/${id}`
      )
      .pipe(map((response) => response.data));
  }
}

interface EmployeesResponse {
  readonly status: string;
  readonly data: EmployeeModel[];
  readonly message: string;
}
interface EmployeeResponse {
  readonly status: string;
  readonly data: EmployeeModel;
  readonly message: string;
}
