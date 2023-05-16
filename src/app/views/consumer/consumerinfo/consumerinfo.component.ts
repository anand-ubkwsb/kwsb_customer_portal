import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-consumerinfo',
  templateUrl: './consumerinfo.component.html',
  styleUrls: ['./consumerinfo.component.scss'],
})
export class ConsumerinfoComponent implements OnInit {
  constructor(
    private _consumerService: ConsumerService,
    private _accountService: AccountServiceService
  ) {
    this.intializeForm();
  }

  consumerInfoParams: FormGroup;
  consumerInfo: any = [];
  userData: any = [];
  error = '';

  displayedColumns: string[] = ['unit_id', 'category', 'plot_size', 'stories'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  intializeForm() {
    this.consumerInfoParams = new FormGroup({
      cons_type: new FormControl('', [Validators.required]),
      cons_no: new FormControl('', [Validators.required]),
    });
  }

  getEmailLocaly(): string {
    // return 'naveen.karia29@gmail.com';
    return localStorage.getItem('email');
  }

  GetUser() {
    // console.log('checkemail', this.getEmailLocaly());
    this._accountService
      .getUser({ email: this.getEmailLocaly() })
      .subscribe((data) => {
        if (data && data.status === true) {
          this.userData = data.data;
          this.consumerInfoParams.controls['cons_type'].setValue(data.data?.cons_type)
          this.consumerInfoParams.controls['cons_no'].setValue(data.data?.cons_no)
          this.userData && this.GetConsumerInfo();
          // console.log(data)
        }else{
          console.error('Error', data.message);
          this.error = data.message;
        }
      });
  }

  GetConsumerInfo() {
    this.error = '';
    this._consumerService.getConsumerInfo(this.consumerInfoParams.value).subscribe((data) => {
      if (data && data.status === true) {
        // console.log("this.getConsumerInfo", data)
        this.consumerInfo = data.data;
        this.dataSource = new MatTableDataSource<any>(this.consumerInfo);
      } else {
        console.error('Error', data.message);
        this.dataSource = new MatTableDataSource<any>([]);
        this.error = data.message;
      }
    });
  }

  ngOnInit(): void {
    this.GetUser();
  }
}
