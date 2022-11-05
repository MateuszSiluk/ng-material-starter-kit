import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

const API_URL = 'https://dummy.restapiexample.com/api/v1/create';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {}

  create(employee: EmployeeModel): Observable<EmployeeModel> {
    return this._httpClient.post<EmployeeModel>(`${API_URL}`, employee);
  }
}
