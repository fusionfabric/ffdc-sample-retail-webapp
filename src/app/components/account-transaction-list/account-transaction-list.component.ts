import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccountTransaction } from '../../store/models/transaction';
import groupBy from 'lodash/groupby';
import { Dictionary } from 'lodash';
import { compareDate } from '../../utils';

@Component({
  selector: 'ffdc-account-transaction-list',
  templateUrl: './account-transaction-list.component.html',
  styleUrls: ['./account-transaction-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'account-transaction-list'
  }
})
export class AccountTransactionListComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _accountTransactions!: AccountTransaction[];

  @Input()
  public get accountTransactions(): AccountTransaction[] {
    return this._accountTransactions;
  }
  public set accountTransactions(value: AccountTransaction[]) {
    this._accountTransactions = value;
    this.groupByAccountTransactions = groupBy(value, 'transactionDate');
    this.transactionDates = Object.keys(this.groupByAccountTransactions).sort(compareDate);
  }

  groupByAccountTransactions!: Dictionary<AccountTransaction[]>;
  transactionDates: string[] = [];
  constructor() { }

  ngOnInit() {

  }

}
