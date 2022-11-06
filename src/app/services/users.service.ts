import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const API_URL = 'https://fakestoreapi.com/users';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  create(user: UserModel): Observable<UserModel> {
    return this._httpClient.post<UserModel>(`${API_URL}`, user);
  }
}
