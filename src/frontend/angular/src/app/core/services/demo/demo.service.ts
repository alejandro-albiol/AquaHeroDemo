import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { MockData, Statistics, User, Zone } from './models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = `${environment.apiUrl}/advice`;

  constructor(private http: HttpClient) {}

  advice(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}`);
  }
}
