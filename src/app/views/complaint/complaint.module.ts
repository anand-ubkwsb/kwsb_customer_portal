import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListcomplaintComponent } from './listcomplaint/listcomplaint.component';
import { AddcomplaintComponent } from './addcomplaint/addcomplaint.component';
import { ComplaintRoutingModule } from './complaint-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ListcomplaintComponent,
    AddcomplaintComponent
  ],
  imports: [
    CommonModule,
    ComplaintRoutingModule,
    ButtonModule,
    CardModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    IconModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ]
})
export class ComplaintModule { }
