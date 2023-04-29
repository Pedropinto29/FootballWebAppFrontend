import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ɵɵresolveBody } from '@angular/core';
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

export class UserLogin{
  'username': string;
  'password': string;
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
    return this.http.get(this.baseUrl + 'profile', {headers: headers})
  }

  login(user : User) : Observable <any> {
    return this.http.post(this.baseUrl + 'login', user)
  }

  userExists(user : UserLogin) : Observable <any> {
    console.log(user)
    return this.http.post(this.baseUrl + "userExists", user)
  }
}
