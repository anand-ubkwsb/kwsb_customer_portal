import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Profile',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account',
      },
      {
        path: 'account',
        component: AccountComponent,
        data: {
          title: 'Account',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
