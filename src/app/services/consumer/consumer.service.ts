import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Consumerlist } from '../../models/consumerlist';
import { Addconsumer } from '../../models/addconsumer';
import { Consumerinfo } from '../../models/consumerinfo';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  constructor(private httpClient: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  getConsumerList(consumerlist: Consumerlist): Observable<any> {
    const body = JSON.stringify(consumerlist);
    console.log('consumerlist body: ', body);
    return this.httpClient.post(`/api/consumers/single`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  addConsumer(addconsumer: Addconsumer): Observable<any> {
    const body = JSON.stringify(addconsumer);
    console.log('addconsumer body: ', body);
    return this.httpClient.post(`/api/consumers/add`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getConsumerInfo(consumerinfo: Consumerinfo): Observable<any> {
    const body = JSON.stringify(consumerinfo);
    console.log('consumerinfo body: ', body);
    return this.httpClient.post(`/api/retail/getconsumerinfo`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }
}
