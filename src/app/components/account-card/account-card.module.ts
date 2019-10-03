import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCardComponent } from './account-card.component';
import { MaterialModules } from '../../material-modules';

@NgModule({
  declarations: [AccountCardComponent],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [AccountCardComponent]
})
export class AccountCardModule { }
