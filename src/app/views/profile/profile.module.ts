import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class ProfileModule { }
