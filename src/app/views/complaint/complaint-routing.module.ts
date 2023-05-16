import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { ListcomplaintComponent } from './listcomplaint/listcomplaint.component';

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Complaint'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'current_bill',
              },
              {
                path: 'list_complaint',
                component: ListcomplaintComponent,
                data: {
                  title: 'List Complaint',
                },
              },
              {
                path: 'add_complaint',
                component: AddcomplaintComponent,
                data: {
                  title: 'Add Complaint',
                },
              }

        ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintRoutingModule {
}
