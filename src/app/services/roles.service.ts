import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleModel} from '../models/role.model';

const API_URL = 'https://636ce2d8ab4814f2b2712854.mockapi.io/roles';
@Injectable()
export class RolesService {
  constructor(private _httpClient: HttpClient) {

  }
  getAll(): Observable<RoleModel[]> {
    return this._httpClient.get<RoleModel[]>(`${API_URL}`);
  }
}
