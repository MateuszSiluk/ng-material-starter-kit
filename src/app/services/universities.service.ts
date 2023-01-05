import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniversityModel } from '../models/university.model';

const API_URL = 'http://universities.hipolabs.com';

@Injectable({ providedIn: 'root' })
export class UniversitiesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(country: string): Observable<UniversityModel[]> {
    return this._httpClient.get<UniversityModel[]>(
      `${API_URL}/search?country=${country}`
    );
  }
}
