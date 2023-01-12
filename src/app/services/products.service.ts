import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

const API_URL = 'https://fakestoreapi.com';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(sort: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      `${API_URL}/products?sort=${sort}`
    );
  }
}
