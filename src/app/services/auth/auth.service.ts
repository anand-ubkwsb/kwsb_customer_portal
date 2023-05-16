import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated(): string {
    return  localStorage.getItem('token');
  }
}
