import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  AppState,
  selectAccountTransactionsWithAccountInfo,
  isSearchingAccountTransactions,
  selectAccountTransactionsWithAccountInfoForAccount
} from '../../store/reducers';
import {
  searchAllAccountTransactions,
  searchAccountTransactions
} from '../../store/actions/account-transaction.actions';
import { Observable, Subject, BehaviorSubject, combineLatest, of, iif, ReplaySubject } from 'rxjs';
import { AccountTransaction } from '../../store/models';
import { dateFormat } from '../../utils';
import { takeUntil, filter, map, mergeMap, switchMap } from 'rxjs/operators';
@Component({
  selector: 'ffdc-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'account-transaction'
  }
})
export class AccountTransactionComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: variable-name
  private _accountId: string | undefined;

  @Input()
  public get accountId(): string | undefined {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
    if (value) {
      this.store.dispatch(
        searchAccountTransactions({ accountId: value, filter: { startDate: dateFormat(this.lastMonth) } })
      );
      this.accountId$.next(value);
    }
  }
  @Input() showAllAccount = false;

  accountTransactions: AccountTransaction[] = [];

  selectedTabIndex = 0;
  selectedTabIndex$ = new BehaviorSubject(0);
  searching$!: Observable<boolean>;
  private accountId$ = new ReplaySubject<string>(1);

  private destroyed$ = new Subject<void>();
  private lastMonth: Date;
  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {
    this.lastMonth = new Date();
    this.lastMonth.setMonth(this.lastMonth.getMonth() - 1);
  }

  ngOnInit() {
    if (this.showAllAccount) {
      this.store.dispatch(searchAllAccountTransactions({ filter: { startDate: dateFormat(this.lastMonth) } }));
    }
    const getAllOrSingleAccountTransaction = iif(
      () => this.showAllAccount,
      this.store.pipe(select(selectAccountTransactionsWithAccountInfo)),
      this.accountId$.pipe(
        switchMap(accountId =>
          this.store.pipe(
            select(selectAccountTransactionsWithAccountInfoForAccount, { accountId })
          )
        )
      )
    );

    combineLatest(this.selectedTabIndex$, getAllOrSingleAccountTransaction)
      .pipe(
        map(([index, accountTransactions]) => {
          if (index === 1) {
            return accountTransactions.filter(transaction => transaction.transactionAmount > 0);
          } else if (index === 2) {
            return accountTransactions.filter(transaction => transaction.transactionAmount < 0);
          }

          return accountTransactions;
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe(accountTransactions => {
        this.accountTransactions = accountTransactions;
        this.cd.markForCheck();
      });
    this.searching$ = this.store.pipe(select(isSearchingAccountTransactions));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  setSelectedTabIndex(index: number) {
    this.selectedTabIndex = index;
    this.selectedTabIndex$.next(index);
  }
}
