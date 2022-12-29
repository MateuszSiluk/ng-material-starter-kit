import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTagModel } from '../models/job-tag.model';

const API_URL = 'https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags';
@Injectable()
export class JobTagsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<JobTagModel[]> {
    return this._httpClient.get<JobTagModel[]>(`${API_URL}`);
  }
}
