import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { Zone } from './models/dashboard.model';

interface IZone {
  success: boolean;
  zones: Zone[]
}

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  private readonly apiUrl = `${environment.apiUrl}/zones`;

  constructor(private http: HttpClient) {}

  getZones(): Observable<IZone> {
    return this.http.get<IZone>(`${this.apiUrl}`);
  }
}
