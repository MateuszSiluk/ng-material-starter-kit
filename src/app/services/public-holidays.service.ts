import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicHolidayModel } from '../models/public-holiday.model';

const URL_API = 'https://date.nager.at/api/v2/publicholidays/2020/US';

@Injectable()
export class PublicHolidaysService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<PublicHolidayModel[]> {
    return this._httpClient.get<PublicHolidayModel[]>(`${URL_API}`);
  }
}
