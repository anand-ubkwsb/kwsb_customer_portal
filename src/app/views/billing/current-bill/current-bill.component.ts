import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BillingService } from '../../../services/billing/billing.service';
import { CurrentBill } from '../../../models/current-bill';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

import { retailBill } from './retail-bill.component';
import { bulkBill } from './bulk-bill.component';
import { formatNumber } from '../../../const/custom-function.component';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-current-bill',
  templateUrl: './current-bill.component.html',
  styleUrls: ['./current-bill.component.scss'],
})
export class CurrentBillComponent implements OnInit {
  @ViewChild('retail', { static: true, read: ElementRef }) retail: ElementRef;
  currentbillParam: FormGroup;
  currentbill: any = [];
  userData: any = [];
  retailData: any = [];
  error = '';
  // currentbillParam: any = {
  //   cons_type: 'retail',
  //   cons_no: 'A0010003000',
  // };
  px2mmFactor: number;

  constructor(
    private _billingService: BillingService,
    private _accountService: AccountServiceService
  ) {
    this.intializeForm();
  }

  intializeForm() {
    this.currentbillParam = new FormGroup({
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
          this.currentbillParam.controls['cons_type'].setValue(
            data.data?.cons_type
          );
          this.currentbillParam.controls['cons_no'].setValue(
            data.data?.cons_no
          );
          if (this.userData) {
            this.GetCurrentBill();
            this.GetRetailBill();
          }
          // console.log(data)
        } else {
          console.error('Error', data.message);
          this.error = data.message;
        }
      });
  }

  GetCurrentBill() {
    this.error = '';
    // console.log('from ts file: ', this.currentbillParam.value);
    this._billingService
      .getCurrentBill(this.currentbillParam.value)
      .subscribe((data) => {
        if (data && data.status === true) {
          this.currentbill = data.data[0];
          this.GetRetailBill();
        } else {
          console.error('Error', data.message);
          this.error = data.message;
        }
      });
  }

  GetRetailBill() {
    // this.error = '';
    // console.log('from ts file: ', this.currentbillParam.value);
    this._billingService
      .getRetailBill(this.currentbillParam.value)
      .subscribe((data) => {
        if (data && data.status === true) {
          // console.log('retail bill:', data.data);
          this.retailData = data.data[0];
        } else {
          console.error('Error', data.message);
          this.error = data.message;
        }
      });
  }

  downloadBill() {
    this.GetRetailBill();

    // let data = retailBill(this.retailData, formatNumber);
    // let elementHTML: any = data;
    // var doc = new jsPDF('p', 'mm', 'a4', true);
    // await doc.html(elementHTML, {
    //   callback: function (doc) {
    //     // Save the PDF
    //     // document.body.innerHTML = elementHTML
    //     // window.print()
    //     return doc.save()
    //   },
    //   // margin: [10, 10, 10, 10],
    //   autoPaging: 'text',
    //   width: doc.internal.pageSize.getWidth(), //target width in the PDF document
    //   windowWidth: 892, //window width in CSS pixels
    // });

    // let data = retailBill(this.retailData, formatNumber);
    // let elementHTML: any = (document.documentElement.innerHTML = data);
    // var opt = {
    //   // margin:       1,
    //   filename: 'myfile.pdf',
    //   image: { type: 'png' },
    //   html2canvas: { scale: 3 },
    //   jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    // };

    // await html2pdf().from(elementHTML).set(opt).save();

    setTimeout(() => {
      const Conservancy = this.retailData?.OUT_CONSERVANCY_ARREARS?.replace(
        /,/g,
        ''
      );
      const Fire = this.retailData?.OUT_FIRE_ARREARS?.replace(/,/g, '');
      const conservancy_fire_arrears = Number(Conservancy) + Number(Fire);

      let consumerNumberBarcode = this.textToBase64BarcodeBlob(
        this.retailData?.CONS_NO
      );
      let barCode = this.textToBase64BarcodeBlob(this.retailData?.BAR_CODE);

      // console.log('barcodeNumber: ', consumerNumberBarcode)
      // console.log('barCode: ', barCode)

      let data =
        this.currentbillParam.controls['cons_type'].value == 'retail'
          ? retailBill(
              this.retailData,
              formatNumber,
              consumerNumberBarcode,
              barCode
            )
          : bulkBill(this.retailData, conservancy_fire_arrears, formatNumber);

      var doc = new jsPDF('p', 'mm', 'a4', true);
      doc.html(data, {
        callback: function (doc) {
          // alert('stop')
          // Save the PDF
          // document.body.innerHTML = elementHTML
          doc.save('current bill.pdf');
        },
        // margin: [10, 10, 10, 10],
        autoPaging: 'text',
        width: doc.internal.pageSize.getWidth(), //target width in the PDF document
        windowWidth: 892, //window width in CSS pixels
      });

      // let elementHTML: any = (document.documentElement.innerHTML = data);
      // const options = {
      //   background: 'white',
      //   // scale: 3,
      //   useCORS:true
      // };
      // html2canvas(elementHTML, options).then((canvas) => {
      //   var img = canvas.toDataURL('image/png');
      //   var doc = new jsPDF('p', 'mm', 'a4', true);
      //   // Add image Canvas to PDF
      //   const bufferX = 5;
      //   const bufferY = 5;
      //   const imgProps = (<any>doc).getImageProperties(img);
      //   const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      //   doc.addImage(
      //     img,
      //     'PNG',
      //     bufferX,
      //     bufferY,
      //     pdfWidth,
      //     pdfHeight,
      //     undefined,
      //     'FAST'
      //   )
      //   return doc.save('new-file.pdf');
      // })
    }, 500);
  }

  textToBase64BarcodeBlob(text) {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, text, {
      format: 'code128',
      height: 50,
      width: 2.0,
      displayValue: false,
    });
    return canvas.toDataURL('image/png');
  }

  ngOnInit(): void {
    this.GetUser();
  }
}
