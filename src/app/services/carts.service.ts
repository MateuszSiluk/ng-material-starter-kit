import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';

const API_URL = 'https://fakestoreapi.com/carts';

@Injectable()
export class CartsService {
  constructor(private _httpClient: HttpClient) {}

  getOne(id: number): Observable<CartModel> {
    return this._httpClient.get<CartModel>(`${API_URL}/${id}`);
  }
}
