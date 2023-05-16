import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }
  
  getToken():  string {
    return  localStorage.getItem('token');
}

  getAccountInfo(account: Account): Observable<any> {
    const body = JSON.stringify(account);
    console.log('account body: ', body);
    return this.httpClient.post(`/api/users/me`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${this.getToken()}`
      })
    });
  }
}
