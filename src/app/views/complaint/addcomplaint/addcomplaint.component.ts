import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { ComplaintService } from 'src/app/services/complaint/complaint.service';
import { Addcomplaint } from '../../../models/addcomplaint';

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.scss'],
})
export class AddcomplaintComponent implements OnInit {
  constructor(
    private _complaintService: ComplaintService,
    private _accountService: AccountServiceService,
    public datepipe: DatePipe
  ) {
    this.intializeForm();
  }

  townByIdParam: FormGroup;
  consumerListParams: FormGroup;
  addComplaintParams: FormGroup;
  userParam: FormGroup;

  consType = '';
  TownId: '';

  userData: any = [];
  complaintPriority: any = [];
  complaintQuestions: any = [];
  complaintStatus: any = [];
  complaintType: any = [];
  complaintNature: any = [];
  complaintTown: any = [];
  complaintConsumerNo: any = [];
  error = ""
  success = ""

  intializeForm() {
    this.userParam = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
    this.townByIdParam = new FormGroup({
      cons_type: new FormControl('', [Validators.required]),
      cons_no: new FormControl('', [Validators.required]),
    });
    this.consumerListParams = new FormGroup({
      cons_type: new FormControl('', [Validators.required]),
      cons_email: new FormControl('', [Validators.required]),
    });
    this.addComplaintParams = new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      cons_type: new FormControl('', [Validators.required]),
      cons_no: new FormControl('', [Validators.required]),
      complaint_type_id: new FormControl('', [Validators.required]),
      complaint_question_id: new FormControl('', [Validators.required]),
      complaint_town_id: new FormControl('', [Validators.required]),
      complaint_status_id: new FormControl('1', [Validators.required]),
      complaint_priority_id: new FormControl('', [Validators.required]),
      complaint_nature_id: new FormControl('6', [Validators.required]),
      complaint_remarks: new FormControl('', [Validators.required]),
      complaint_date: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required]),
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
          // console.log(this.userData);
          this.userData && this.GetConsumerNumber();
        }
        if (data.length == 0) {
          console.log('data not found');
        }
      });
  }

  GetConsumerPriority() {
    this._complaintService.getComplaintPriority().subscribe((data) => {
      if (data.length != 0) {
        this.complaintPriority = data.data;
        // console.log(this.complaintPriority);
      }
      if (data.length == 0) {
        console.log('data not found');
      }
    });
  }

  GetConsumerQuestions() {
    this._complaintService.getComplaintQuestions().subscribe((data) => {
      if (data.length != 0) {
        this.complaintQuestions = data.data;
        // console.log(this.complaintQuestions);
      }
      if (data.length == 0) {
        console.log('data not found');
      }
    });
  }

  GetConsumerStatus() {
    this._complaintService.getComplaintStatus().subscribe((data) => {
      if (data.length != 0) {
        this.complaintStatus = data.data;
        // console.log(this.complaintStatus);
      }
      if (data.length == 0) {
        console.log('data not found');
      }
    });
  }

  GetConsumerType() {
    this._complaintService.getComplaintType().subscribe((data) => {
      if (data.length != 0) {
        this.complaintType = data.data;
        // console.log(this.complaintType);
      }
      if (data.length == 0) {
        console.log('data not found');
      }
    });
  }

  GetConsumerNature() {
    this._complaintService.getComplaintNature().subscribe((data) => {
      if (data.length != 0) {
        this.complaintNature = data.data;
        // console.log(this.complaintNature);
      }
      if (data.length == 0) {
        console.log('data not found');
      }
    });
  }

  GetConsumerTown() {
    this._complaintService.getComplaintTown().subscribe((data) => {
      if (data.length != 0) {
        this.complaintTown = data.data;
        // console.log(this.complaintTown);
      }
      if (data.length == 0) {
        console.log('data not found');
      }
    });
  }

  GetConsumerTownById() {
    const complaintParams = this.addComplaintParams.value;
    const townParams = this.townByIdParam.value;
    townParams.cons_type = this.consType;
    townParams.cons_no = complaintParams.cons_no;
    this._complaintService
      .getComplaintTownById(townParams)
      .subscribe((data) => {
        if (data.length != 0) {
          complaintParams.complaint_town_id = data.data[0].town_id;
          // return this.TownId = data.data[0].town_id
          // console.log(this.complaintTownById);
        }
        if (data.length == 0) {
          console.log('data not found');
        }
      });
  }

  GetConsumerNumber() {
    const params = this.consumerListParams.value;
    params.cons_type = this.userData?.cons_type;
    params.cons_email = this.userData?.email;
    // console.log(params);
    // console.log("second test user",this.userData);
    this._complaintService
      .getComplaintConsumerNumber(params)
      .subscribe((data) => {
        if (data.length != 0) {
          this.complaintConsumerNo = data.data;
          // console.log(this.complaintConsumerNo);
        }
        if (data.length == 0) {
          console.log('data not found');
        }
      });
  }

  onSelectConsumerNumber(val: string) {
    for (let i = 0; i < this.complaintConsumerNo.length; i++) {
      if (this.complaintConsumerNo[i].cons_no == val) {
        return (this.consType = this.complaintConsumerNo[i].cons_type);
      }
    }
  }
  onSubmit() {
    this.error = ""
    this.GetConsumerTownById();
    const params = this.addComplaintParams.value;
    params.user_name = this.userData?.first_name + ' ' + this.userData?.last_name;
    params.email = this.userData?.email;
    params.mobile_no = this.userData?.mobile_no;
    params.address = this.userData?.address;
    params.user_id = this.userData?.id;
    params.cons_type = this.consType;
    params.complaint_town_id = this.TownId;
    params.complaint_date = this.datepipe.transform(new Date(), 'dd-MM-YYYY');

    if(this.addComplaintParams.controls['complaint_remarks'].value.length == 0){
      this.error = "Please fill all the fields"
      return
    }

    setTimeout(() => {
          this._complaintService.addComplaint(params).subscribe((data) => {
      if (data && data.status === true) {
        this.success = "Complaint Added Successfully"
        console.log(data);
      } else {
        console.error('Error', data.message);
        this.error = data.message;
      }
    });
    },500)
    // this._complaintService.addComplaint(params).subscribe((data) => {
    //   if (data.length != 0) {
    //     console.log(data);
    //   }
    //   if (data.length == 0) {
    //     console.log('data not found');
    //   }
    // });
  }

  ngOnInit(): void {
    this.GetUser();
    this.GetConsumerPriority();
    this.GetConsumerQuestions();
    this.GetConsumerStatus();
    this.GetConsumerType();
    this.GetConsumerNature();
    this.GetConsumerTown();
  }
}
