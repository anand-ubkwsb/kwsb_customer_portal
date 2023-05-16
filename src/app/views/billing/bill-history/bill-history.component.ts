import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { BillingService } from 'src/app/services/billing/billing.service';

import { billHistoryRetail } from './bill-history-retail.component';
import { billHistoryBulk } from './bill-history-bulk.component';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import * as JsBarcode from 'jsbarcode';
import * as moment from 'moment';

@Component({
  selector: 'app-bill-history',
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.scss'],
})
export class BillHistoryComponent implements OnInit {
  constructor(
    private _billingService: BillingService,
    public datepipe: DatePipe
  ) {
    this.intializeForm();
  }

  billParam: FormGroup;
  currentbillParam: FormGroup;
  date = '';
  billHistory: any = [];
  error = '';
  retailData: any = [];
  showpdfbutton: any;

  displayedColumns: string[] = [
    'bill_period',
    'demand',
    'payment',
    'payment_date',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  intializeForm() {
    this.billParam = new FormGroup({
      cons_type: new FormControl('', [Validators.required]),
      cons_no: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
    });
    this.currentbillParam = new FormGroup({
      cons_type: new FormControl('', [Validators.required]),
      cons_no: new FormControl('', [Validators.required]),
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

  GetBillHistoryData() {
    this.error = '';
    const params = this.billParam.value;
    params.from = `${this.datepipe.transform(
      this.billParam.controls['from'].value,
      'YYYY-MM'
    )}-01`;
    params.to = `${this.datepipe.transform(
      this.billParam.controls['to'].value,
      'YYYY-MM'
    )}-01`;

    // console.log('Params: ', params)

    this._billingService.getBillingHistory(params).subscribe((data) => {
      if (data && data.status === true) {
        this.billHistory = data.data;
        this.dataSource = new MatTableDataSource<any>(this.billHistory);
        this.showpdfbutton = true;
        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }
        this.currentbillParam.controls['cons_type'].setValue(
          this.billParam.controls['cons_type'].value
        );
        this.currentbillParam.controls['cons_no'].setValue(
          this.billParam.controls['cons_no'].value
        );
        //  console.log(data.data[0])
        // console.log("this.billHistory",this.billHistory)
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
      let data =
        this.billParam.controls['cons_type'].value == 'retail'
          ? billHistoryRetail(
              this.billHistory,
              moment,
              this.retailData,
              this.billParam.controls['cons_type'].value,
              'Bill History'
            )
          : billHistoryBulk(
              this.billHistory,
              moment,
              this.retailData,
              this.billParam.controls['cons_type'].value,
              'Bill History'
            );

      // let elementHTML: any = (document.documentElement.innerHTML = data);
      var doc = new jsPDF('l', 'pt', 'a4', true);
      doc.html(data, {
        callback: function (doc) {
          // alert('stop')
          // Save the PDF
          // document.body.innerHTML = elementHTML
          doc.save('bill history.pdf');
        },
        // margin: [3, 3, 3, 3],
        autoPaging: 'text',
        width: doc.internal.pageSize.getWidth(), //target width in the PDF document
        windowWidth: this.billParam.controls['cons_type'].value == 'retail' ? 1500 : 2000, //window width in CSS pixels
      });

      // let elementHTML: any = (document.documentElement.innerHTML = data);

      // const options = {
      //   background: 'white',
      //   scale: 3,
      // };
      // html2canvas(elementHTML, options).then((canvas) => {
      //   var img = canvas.toDataURL('image/png');
      //   var doc = new jsPDF('l', 'mm', 'a4', true);
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
      //   );
      //   return doc;
      // });
    }, 500);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.billHistory);
  }
}
