import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { map } from 'rxjs/operators';

const API_URL = 'https://dummy.restapiexample.com/api/v1/employees';
interface EmployeeResponse {
  status: string;
  data: EmployeeModel[];
  message: string;
}
@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient
      .get<EmployeeResponse>(`${API_URL}`)
      .pipe(map((response) => response.data));
  }
}
