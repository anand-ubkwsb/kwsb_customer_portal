import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Complaintlist } from '../../models/complaintlist';
import { Addcomplaint } from '../../models/addcomplaint';
import { TownById } from '../../models/town-by-id';
import { Consumerlist } from 'src/app/models/consumerlist';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  constructor(private httpClient: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  // getComplaintList(): Observable<any> {
  //   return this.httpClient.post(`/api/complaint`, null, {
  //     headers: new HttpHeaders({
  //       'content-type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       Authorization: `Bearer ${this.getToken()}`,
  //     }),
  //   });
  // }

  getComplaintList(complaintlist: Complaintlist): Observable<any> {
    const body = JSON.stringify(complaintlist);
    console.log('complaintlist body: ', body);
    return this.httpClient.post(`/api/complaint/single`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintPriority(): Observable<any> {
    return this.httpClient.post(`/api/complaint/priority`, null, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintQuestions(): Observable<any> {
    return this.httpClient.post(`/api/complaint/questions`, null, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintStatus(): Observable<any> {
    return this.httpClient.post(`/api/complaint/status`, null, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintType(): Observable<any> {
    return this.httpClient.post(`/api/complaint/type`, null, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintNature(): Observable<any> {
    return this.httpClient.post(`/api/complaint/nature`, null, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintTown(): Observable<any> {
    return this.httpClient.post(`/api/complaint/town`, null, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintTownById(townbyid: TownById): Observable<any> {
    const body = JSON.stringify(townbyid);
    console.log('addcomplaint body: ', body);
    return this.httpClient.post(`/api/complaint/townById`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }

  getComplaintConsumerNumber(consumerlist:Consumerlist): Observable<any> {
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

  addComplaint(addcomplaint: Addcomplaint): Observable<any> {
    const body = JSON.stringify(addcomplaint);
    console.log('addcomplaint body: ', body);
    return this.httpClient.post(`/api/complaint/add`, body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${this.getToken()}`,
      }),
    });
  }
}
