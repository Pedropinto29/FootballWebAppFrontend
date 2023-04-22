import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class User {
  'userId' : number;
  'username' : string;
  'password' : string;
  'name' : string;
  'surname': string;
  'email': string;
  'annualPlace' : string;
  'admin': boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) {}

  getUserProfile() : Observable <any> {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get(this.baseUrl + 'profile', {"headers": headers})
  }
}
