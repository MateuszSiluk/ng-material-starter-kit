import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

const API_URL = 'https://636ce2d8ab4814f2b2712854.mockapi.io/user';
@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  create(user: UserModel): Observable<void> {
    return this._httpClient.post<void>(`${API_URL}`, user);
  }
}
