import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsPageComponent } from './donations-page.component';
import { RouterModule } from '@angular/router';
import { AccountListModule } from '../../components/account-list/account-list.module';
import { AccountTransactionModule } from '../account-transaction/account-transaction.module';
import { MaterialModules } from '../../material-modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DonationsPageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MaterialModules,
    AccountListModule,
    RouterModule.forChild([
      {
        path: '',
        component: DonationsPageComponent
      }
    ]),
    AccountTransactionModule
  ],
  exports: [DonationsPageComponent],
  entryComponents: [DonationsPageComponent]
})

export class DonationsPageModule {}
