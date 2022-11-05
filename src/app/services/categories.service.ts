import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://fakestoreapi.com/products/categories';

@Injectable()
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<string[]> {
    return this._httpClient.get<string[]>(`${API_URL}`);
  }
}
