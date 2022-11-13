import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostCodeModel } from '../models/post-code.model';

const API_URL = 'https://api.zippopotam.us/us';

@Injectable()
export class PostCodesService {
  constructor(private _httpClient: HttpClient) {}

  getOne(postCodeNumber: string): Observable<PostCodeModel> {
    return this._httpClient.get<PostCodeModel>(`${API_URL}/${postCodeNumber}`);
  }
}
