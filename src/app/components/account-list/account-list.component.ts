import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState, selectAllAccounts } from '../../store/reducers';
import { AccountActions } from '../../store/actions';
import { Observable } from 'rxjs';
import { AccountSummary, AccountEntity } from '../../store/models';
import { Router } from '@angular/router';

@Component({
  selector: 'ffdc-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'account-list'
  }
})
export class AccountListComponent implements OnInit {
  @Input() accounts: AccountEntity[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelectedAccount(account: AccountEntity) {
    this.router.navigateByUrl(`/accounts/${account.accountId}`);
  }
}
