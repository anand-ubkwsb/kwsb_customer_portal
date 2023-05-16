import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentBill } from '../../models/current-bill';
import { Billhistory } from '../../models/billhistory';
import { Paymenthistory } from '../../models/paymenthistory';
import { Retail } from '../../models/retail';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  constructor(private httpClient: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  getCurrentBill(current: CurrentBill): Observable<any> {
    const body = JSON.stringify(current);
    console.log('current body: ', body);
    return this.httpClient.post(`/api/retail/getcurrentbill`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getBillingHistory(billHistory: Billhistory): Observable<any> {
    const body = JSON.stringify(billHistory);
    console.log('bill history body: ', body);
    return this.httpClient.post(`/api/retail/billhistory`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getPaymentHistory(paymentHistory: Paymenthistory): Observable<any> {
    const body = JSON.stringify(paymentHistory);
    console.log('payment history body: ', body);
    return this.httpClient.post(`/api/retail/paymentdetail`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getRetailBill(retail: Retail): Observable<any> {
    const body = JSON.stringify(retail);
    console.log('current body: ', body);
    return this.httpClient.post(`/api/retail`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }
}
