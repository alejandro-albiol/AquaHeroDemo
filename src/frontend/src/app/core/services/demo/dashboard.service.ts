import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { MockData } from './models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly apiUrl = `${environment.apiUrl}/dashboard`;

  constructor(private http: HttpClient) {}

  getData(): Observable<MockData> {
    return this.http.get<MockData>(this.apiUrl);
  }
}
