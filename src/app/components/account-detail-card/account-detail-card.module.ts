import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailCardComponent } from './account-detail-card.component';
import { MaterialModules } from '../../material-modules';

@NgModule({
  declarations: [AccountDetailCardComponent],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [AccountDetailCardComponent]
})
export class AccountDetailCardModule { }
