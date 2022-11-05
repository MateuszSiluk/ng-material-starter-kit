import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationModel } from '../models/authentication.model';

const API_URL = 'https://fakestoreapi.com/auth/login';

@Injectable()
export class AuthenticationService {
  constructor(private _httpClient: HttpClient) {}

  login(userData: AuthenticationModel): Observable<AuthenticationModel> {
    return this._httpClient.post<AuthenticationModel>(`${API_URL}`, userData);
  }
}
