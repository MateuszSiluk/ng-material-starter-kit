import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgePredictionModel } from '../models/age-prediction.model';

const API_URL = 'https://api.agify.io';

@Injectable()
export class AgePredictionService {
  constructor(private _httpClient: HttpClient) {}

  getOne(name: string): Observable<AgePredictionModel> {
    return this._httpClient.get<AgePredictionModel>(`${API_URL}/?name=${name}`);
  }
}
