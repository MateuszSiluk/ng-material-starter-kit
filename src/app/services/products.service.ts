import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

const API_URL = 'https://fakestoreapi.com/products';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`${API_URL}`);
  }

  getOther(categoryName: string): Observable<string[]> {
    return this._httpClient.get<string[]>(
      `${API_URL}/category/${categoryName}`
    );
  }
}
