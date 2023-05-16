import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddconsumerComponent } from './addconsumer/addconsumer.component';
import { ListconsumerComponent } from './listconsumer/listconsumer.component';
import { ConsumerinfoComponent } from './consumerinfo/consumerinfo.component';

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Consumer'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list_consumer',
              },
              {
                path: 'list_consumer',
                component: ListconsumerComponent,
                data: {
                  title: 'List Consumer',
                },
              },
              {
                path: 'add_consumer',
                component: AddconsumerComponent,
                data: {
                  title: 'Add Consumer',
                },
              },
              {
                path: 'consumer_info',
                component: ConsumerinfoComponent,
                data: {
                  title: 'Consumer Information',
                },
              }
        ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule {
}
