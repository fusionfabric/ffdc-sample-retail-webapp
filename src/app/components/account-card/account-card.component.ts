import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { AccountSummary, AccountOverview, ExtendedDetaildedAccount, AccountEntity } from '../../store/models';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'ffdc-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'account-card'
  }
})
export class AccountCardComponent implements OnInit {

  @Input() account!: AccountEntity;

  accountOverview!: AccountOverview;

  constructor( private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountOverview = this.accountService.getAccountOverview(this.account);
  }

}
