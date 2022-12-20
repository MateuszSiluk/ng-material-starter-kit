import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

const API_URL = 'https://fakestoreapi.com/products';
@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  remove(id: number): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>(`${API_URL}/${id}`);
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`${API_URL}`);
  }
}
