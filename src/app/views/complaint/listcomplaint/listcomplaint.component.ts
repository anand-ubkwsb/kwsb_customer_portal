import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ComplaintService } from 'src/app/services/complaint/complaint.service';
import { Complaintlist } from '../../../models/complaintlist';

@Component({
  selector: 'app-listcomplaint',
  templateUrl: './listcomplaint.component.html',
  styleUrls: ['./listcomplaint.component.scss'],
})
export class ListcomplaintComponent implements OnInit {
  constructor(private _complaintService: ComplaintService) {
    this.intializeForm();
  }

  complaintParams: FormGroup;
  complaintList: any = [];
  error = ""

  displayedColumns: string[] = ['cons_no', 'complaint_status_id'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  intializeForm() {
    this.complaintParams = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

  getEmailLocaly(): string {
    // return 'naveen.karia29@gmail.com';
    return localStorage.getItem('email');
  }

  GetConsumerList() {
    this.error = ""
    const params = this.complaintParams.value;
    params.email = this.getEmailLocaly();
    this._complaintService.getComplaintList(params).subscribe((data) => {
      if (data && data.status === true) {
        this.complaintList = data.data;
        this.dataSource = new MatTableDataSource<any>(this.complaintList);
        // console.log(this.complaintList);
      }else{
        console.error('Error', data.message);
        this.error = data.message
      }
    });
  }

  ngOnInit(): void {
    this.GetConsumerList();
  }
}
