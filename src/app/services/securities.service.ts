import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityModel } from '../models/security.model';

const API_URL =
  'https://636ce2d8ab4814f2b2712854.mockapi.io/car-security-features';

@Injectable({ providedIn: 'root' })
export class SecuritiesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<SecurityModel[]> {
    return this._httpClient.get<SecurityModel[]>(`${API_URL}`);
  }
}
