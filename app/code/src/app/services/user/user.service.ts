import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../app-configuration/app-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/api';
  private readonly _httpclient = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this._httpclient.get<User[]>(`${this.baseUrl}/users`).pipe(
      tap(response => console.log('API Response:', response)),
      catchError(error => {
        console.error('API Error:', error);
        return of([]);
      })
    );
  }
}