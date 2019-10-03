import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page.component';
import { RouterModule } from '@angular/router';
import { AccountListModule } from '../../components/account-list/account-list.module';
import { AccountTransactionModule } from '../account-transaction/account-transaction.module';
import { MaterialModules } from '../../material-modules';

@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModules,
    AccountListModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountPageComponent
      }
    ]),
    AccountTransactionModule
  ],
  exports: [AccountPageComponent],
  entryComponents: [AccountPageComponent]
})
export class AccountPageModule { }
