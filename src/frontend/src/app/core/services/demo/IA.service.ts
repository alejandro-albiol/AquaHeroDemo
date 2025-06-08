import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '@environments/environment';
import { IAAdvice } from './models/IA.model';

@Injectable({
  providedIn: 'root',
})
export class IAService {
  private readonly apiUrl = `${environment.apiUrl}/advice`;

  constructor(private http: HttpClient) {}

  advice(): Observable<IAAdvice> {
    //TODO: bypass en dev para no gastar tokens de IA.
    if (!environment.production) {
      const randomAdvice = {
        success: true,
        advice: 'Cierra el grifo mientras te cepillas los dientes.',
      };
      return of(randomAdvice as IAAdvice);
    }
    return this.http.get<IAAdvice>(`${this.apiUrl}`);
  }
}
