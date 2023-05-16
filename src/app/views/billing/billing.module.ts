import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingRoutingModule } from './billing-routing.module';
import { CurrentBillComponent } from './current-bill/current-bill.component';
import { BillHistoryComponent } from './bill-history/bill-history.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    CurrentBillComponent,
    BillHistoryComponent,
    BillPaymentComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    GridModule,
    CardModule,
    ButtonModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule
  ]
})
export class BillingModule { }
