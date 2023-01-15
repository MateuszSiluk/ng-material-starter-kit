import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer.model';

const API_URL = 'https://api.punkapi.com/v2';

@Injectable({ providedIn: 'root' })
export class BeersService {
  constructor(private _httpClient: HttpClient) {}

  getAll(page_size: string, page_index: string): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>(
      `${API_URL}/beers?page=${page_index}&per_page=${page_size}`
    );
  }
}
