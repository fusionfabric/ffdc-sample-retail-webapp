import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list.component';
import { AccountCardModule } from '../account-card/account-card.module';

@NgModule({
  declarations: [AccountListComponent],
  imports: [CommonModule, AccountCardModule],
  exports: [AccountListComponent]
})
export class AccountListModule {
  constructor() {}
}
