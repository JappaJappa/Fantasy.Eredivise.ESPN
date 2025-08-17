import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {
  private baseUrl = '/api'; // This will work in production
  // For local development, you might need: 'http://localhost:3000/api'
  
  get userUrl(): string {
    return `${environment.apiUrl}/api/users`
  }
}