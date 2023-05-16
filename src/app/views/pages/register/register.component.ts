import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error = ""

  constructor(private _accountService: AccountServiceService, private router: Router) {
    this.intializeForm();
  }

  intializeForm() {
    this.registerForm = new FormGroup({
      cons_type: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      email: new FormControl('', [Validators.required]),
      cnic_no: new FormControl('', [
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
      ]),
      cons_no: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      address: new FormControl('', [Validators.required]),
      pin_code: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        // Validators.maxLength(10),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        this.matchPassword('password'),
      ]),
    });
    this.registerForm.controls['password'].valueChanges.subscribe(() => {
      this.registerForm.controls['confirmPassword'].updateValueAndValidity();
    });
  }

  matchPassword(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }

  Register() {
    this.error = ""
    // console.log(this.registerForm);
    // console.log('from ts file: ', this.registerForm.value);
    this._accountService.saveUser(this.registerForm.value).subscribe((data) => {
      // console.log('from account service file: ', data);
      if(data && data.length > 0){
        this.router.navigate(['login'])
      }else {
        console.error('Error', data.message);
        this.error = data.message
      }
    });
  }

  ngOnInit(): void {}
}
