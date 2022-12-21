import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

const API_URL = 'https://dummy.restapiexample.com/api/v1';
interface Response {
  readonly status: string;
  readonly data: EmployeeModel[];
  readonly message: string;
}
@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient
      .get<Response>(`${API_URL}/employees`)
      .pipe(map((response) => response.data));
  }

  remove(id: number): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>(`${API_URL}/delete/${id}`);
  }
}
