import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = '/api'; // This will work in production
  // For local development, you might need: 'http://localhost:3000/api'

  private readonly _httpclient = inject(HttpClient);
  getUsers(): Observable<User[]> {
    return this._httpclient.get<User[]>(`${this.baseUrl}/users`);
  }

  createUser(user: Omit<User, 'id'>): Observable<any> {
    return this._httpclient.post(`${this.baseUrl}/users`, user);
  }

  getOrders(): Observable<any[]> {
    return this._httpclient.get<any[]>(`${this.baseUrl}/orders`);
  }
}