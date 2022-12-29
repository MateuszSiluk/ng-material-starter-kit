import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';

const API_URL = 'https://fakestoreapi.com/carts';

@Injectable()
export class CartsService {
  constructor(private _httpClient: HttpClient) {}

  create(cart: Omit<CartModel, 'id'>): Observable<void> {
    return this._httpClient.post<void>(`${API_URL}`, cart);
  }
}
