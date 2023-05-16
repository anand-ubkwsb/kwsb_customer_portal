import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../models/login';
import { Register } from '../../models/register';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  constructor(private httpClient: HttpClient) {}
  // public saveUser(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.httpClient.post<any>(url, user);
  // }

  loginUser(login: Login): Observable<any> {
    const body = JSON.stringify(login);
    console.log('login body: ', body);
    return this.httpClient.post(`/api/users/login`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  saveUser(register: Register): Observable<any> {
    const body = JSON.stringify(register);
    console.log('register body: ', body);
    return this.httpClient.post(`/api/users/register`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUser(user:User): Observable<any> {
    const body = JSON.stringify(user);
    console.log('user body: ', body);
    return this.httpClient.post(`/api/users/me`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }
}
