import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFactModel } from '../models/cat-fact.model';

const API_URL = 'https://catfact.ninja/fact';

@Injectable()
export class CatFactService {
  constructor(private _httpClient: HttpClient) {}

  getOne(): Observable<CatFactModel> {
    return this._httpClient.get<CatFactModel>(`${API_URL}`);
  }
}
