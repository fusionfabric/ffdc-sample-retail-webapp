import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTransactionListComponent } from './account-transaction-list.component';
import { MaterialModules } from '../../material-modules';

@NgModule({
  declarations: [AccountTransactionListComponent],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [AccountTransactionListComponent]
})
export class AccountTransactionListModule { }
