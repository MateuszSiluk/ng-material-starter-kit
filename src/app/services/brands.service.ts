import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandModel } from '../models/brand.model';

const API_URL = 'https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands';


@Injectable({ providedIn: 'root' })
export class BrandsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<BrandModel[]> {
    return this._httpClient.get<BrandModel[]>(`${API_URL}`);
  }
}
