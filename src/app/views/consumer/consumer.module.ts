import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListconsumerComponent } from './listconsumer/listconsumer.component';
import { ConsumerRoutingModule } from './consumer-routing.module';
import { AddconsumerComponent } from './addconsumer/addconsumer.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ConsumerinfoComponent } from './consumerinfo/consumerinfo.component';


@NgModule({
  declarations: [
    ListconsumerComponent,
    AddconsumerComponent,
    ConsumerinfoComponent
  ],
  imports: [
    ConsumerRoutingModule,
    CommonModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    IconModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ]
})
export class ConsumerModule { }
