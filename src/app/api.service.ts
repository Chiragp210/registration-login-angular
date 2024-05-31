import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.get(`${this.baseUrl}/logout`);
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      // Handle error: token is missing
      return throwError('Token is missing');
    }
  
    const headers = { 'Authorization': `Bearer ${token}` };
  
    return this.http.get(`${this.baseUrl}/profile`, { headers });
  }

  refresh(): Observable<any> {
    return this.http.get(`${this.baseUrl}/refresh`);
  }
}
