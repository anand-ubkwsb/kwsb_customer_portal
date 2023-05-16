import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(private _profileService: ProfileService) {
    this.intializeForm();
  }

  accountParams: FormGroup;
  accountInfo: any = [];
  error = '';

  intializeForm() {
    this.accountParams = new FormGroup({
      email: new FormControl('naveen.karia29@gmail.com', [Validators.required]),
    });
  }

  GetAccountInfo() {
    this.error = '';
    this._profileService
      .getAccountInfo(this.accountParams.value)
      .subscribe((data) => {
        if (data && data.status === true) {
          this.accountInfo = data.data;
          // console.log(data.data);
          // console.log('this.accountInfo', this.accountInfo);
        } else {
          console.error('Error', data.message);
          this.error = data.message;
        }
      });
  }

  ngOnInit(): void {
    this.GetAccountInfo();
  }
}
