import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarComfortFeatureModel } from '../models/car-comfort-feature.model';

const API_URL =
  'https://636ce2d8ab4814f2b2712854.mockapi.io/car-comfort-features';

@Injectable({ providedIn: 'root' })
export class ComfortFeaturesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CarComfortFeatureModel[]> {
    return this._httpClient.get<CarComfortFeatureModel[]>(`${API_URL}`);
  }
}
