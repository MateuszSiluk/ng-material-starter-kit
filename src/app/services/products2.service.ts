import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

const API_URL = 'https://fakestoreapi.com/products';

@Injectable({ providedIn: 'root' })
export class Products2Service {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`${API_URL}`);
  }
}
