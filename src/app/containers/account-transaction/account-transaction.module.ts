import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTransactionComponent } from './account-transaction.component';
import { MaterialModules } from '../../material-modules';
import { AccountTransactionListModule } from '../../components/account-transaction-list/account-transaction-list.module';

@NgModule({
  declarations: [AccountTransactionComponent],
  imports: [
    CommonModule,
    MaterialModules,
    AccountTransactionListModule
  ],
  exports: [AccountTransactionComponent]
})
export class AccountTransactionModule { }
