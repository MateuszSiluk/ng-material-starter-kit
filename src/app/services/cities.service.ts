import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityModel } from '../models/city.model';

const API_URL = 'https://636ce2d8ab4814f2b2712854.mockapi.io/cities';

@Injectable({ providedIn: 'root' })
export class CitiesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CityModel[]> {
    return this._httpClient.get<CityModel[]>(`${API_URL}`);
  }
}
