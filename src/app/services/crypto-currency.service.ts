import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';

const API_URL = 'https://api2.binance.com/api/v3/ticker/24hr';
@Injectable()
export class CryptoCurrencyService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CryptoModel[]> {
    return this._httpClient.get<CryptoModel[]>(`${API_URL}`);
  }
}
