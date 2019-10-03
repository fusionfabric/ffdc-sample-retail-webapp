import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailPageComponent } from './account-detail-page.component';
import { RouterModule } from '@angular/router';
import { AccountDetailCardModule } from '../../components/account-detail-card/account-detail-card.module';
import { MaterialModules } from '../../material-modules';
import { AccountTransactionModule } from '../account-transaction/account-transaction.module';

@NgModule({
  declarations: [AccountDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountDetailPageComponent
      }
    ]),
    MaterialModules,
    AccountTransactionModule,
    AccountDetailCardModule
  ],

  exports: [AccountDetailPageComponent],
  entryComponents: [AccountDetailPageComponent]
})
export class AccountDetailPageModule {}
