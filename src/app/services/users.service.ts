import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const API_URL = 'https://fakestoreapi.com/users';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  getOne(id: number): Observable<UserModel> {
    return this._httpClient.get<UserModel>(`${API_URL}/${id}`);
  }
}
