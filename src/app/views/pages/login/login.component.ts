import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountServiceService } from '../../../services/account/account-service.service';
import { Login } from '../../../models/login';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // login: Login;
  error = "";

  constructor(
    private _accountService: AccountServiceService,
    private router: Router
  ) {
    this.intializeForm();
  }

  intializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        // Validators.maxLength(10),
      ]),
    });
  }

  setToken(token: string): void {
    return localStorage.setItem('token', token);
  }

  setEmailLocaly(email: string): void {
    return localStorage.setItem('email', email);
  }

  Login() {
    this.error = ""
    // console.log('123');
    // console.log('from ts file: ', this.loginForm.value);
    this._accountService.loginUser(this.loginForm.value).subscribe((data) => {
      if (data && data.status === true) {
        console.log('from account service file: ', data.data.token);
        this.router.navigate(['dashboard']);
        this.setToken(data.data.token);
        this.setEmailLocaly(this.loginForm.controls['email'].value);
        return
      } else {
        console.error('Error', data.message);
        this.error = data.message
      }
    });
  }

  ngOnInit(): void {}
}
