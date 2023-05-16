import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillHistoryComponent } from './bill-history/bill-history.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import {CurrentBillComponent} from './current-bill/current-bill.component'

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Billing'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'current_bill',
              },
              {
                path: 'current_bill',
                component: CurrentBillComponent,
                data: {
                  title: 'Current Bill',
                },
              },
              {
                path: 'bill_history',
                component: BillHistoryComponent,
                data: {
                  title: 'Bill History',
                },
              },
              // {
              //   path: 'bill_payment',
              //   component: BillPaymentComponent,
              //   data: {
              //     title: 'Bill Payment',
              //   },
              // },
        ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule {
}
