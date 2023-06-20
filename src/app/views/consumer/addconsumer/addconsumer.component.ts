import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';

@Component({
  selector: 'app-addconsumer',
  templateUrl: './addconsumer.component.html',
  styleUrls: ['./addconsumer.component.scss'],
})
export class AddconsumerComponent implements OnInit {

  
  constructor(private _consumerService: ConsumerService) {
    this.intializeForm()
  }

  addConsumerParam: FormGroup;
  error = ""
  success = ""

  intializeForm() {
    this.addConsumerParam = new FormGroup({
      consumer_email: new FormControl('naveen.karia29@gmail.com', [Validators.required]),
      cons_no: new FormControl('', [Validators.required]),
      cons_type: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    this.error = ""
    // console.log('Add Consumer: ', this.addConsumerParam.value)
    if(this.addConsumerParam.controls['cons_no'].value.length == 0){
      this.error = "Please add consumer number"
      return
    }
    this._consumerService.addConsumer(this.addConsumerParam.value).subscribe((data) => {
      if(data && data.status === true){
        this.success = "Consumer Added Successfully"
        console.log("addConsumer", data)
      }else{
        console.error('Error', data.message);
        this.error = data.message
      }
    })
  }

  ngOnInit(): void {}
}
