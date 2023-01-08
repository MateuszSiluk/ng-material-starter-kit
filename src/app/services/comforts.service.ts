import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComfortModel } from '../models/comfort.model';

const API_URL =
  'https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features';

@Injectable({ providedIn: 'root' })
export class ComfortsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ComfortModel[]> {
    return this._httpClient.get<ComfortModel[]>(`${API_URL}`);
  }
}
