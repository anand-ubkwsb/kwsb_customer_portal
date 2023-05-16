import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-listconsumer',
  templateUrl: './listconsumer.component.html',
  styleUrls: ['./listconsumer.component.scss'],
})
export class ListconsumerComponent implements OnInit {
  constructor(
    private _consumerService: ConsumerService,
    private _accountService: AccountServiceService
  ) {
    this.intializeForm();
  }

  consumerListParams: FormGroup;
  consumerList: any = [];
  userData: any = [];
  error = ""

  displayedColumns: string[] = ['cons_type', 'cons_no', 'consumer_email'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  intializeForm() {
    this.consumerListParams = new FormGroup({
      cons_type: new FormControl('', [Validators.required]),
      cons_email: new FormControl('', [Validators.required]),
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
        if (data.length != 0) {
          this.userData = data.data;
          this.userData && this.GetConsumerList();
        }
        if (data.length == 0) {
          console.log('data not found');
        }
      });
  }

  GetConsumerList() {
    // console.log("consumerList: ", this.consumerListParams.value)
    this.error = ""
    const params = this.consumerListParams.value
    params.cons_type = this.userData?.cons_type
    params.cons_email = this.userData?.email
    // console.log(params)
    this._consumerService
      .getConsumerList(params)
      .subscribe((data) => {
        if (data && data.status === true) {
          this.consumerList = data.data;
          this.dataSource = new MatTableDataSource<any>(this.consumerList);
          //  console.log(data.data[0])
          // console.log("this.consumerList",this.consumerList)
        }else{
          console.error('Error', data.message);
          this.error = data.message
        }
      });
  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any>(this.consumerList);
    this.GetUser();
  }
}
