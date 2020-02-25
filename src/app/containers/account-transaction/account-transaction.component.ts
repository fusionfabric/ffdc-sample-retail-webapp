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
  selectTransactionsDate,
  selectAccountTransactionsWithAccountInfoForAccount
} from '../../store/reducers';
import {
  searchAllAccountTransactions,
  searchAccountTransactions,
  updateTransactionsSelectedDate
} from '../../store/actions/account-transaction.actions';
import { Observable, Subject, BehaviorSubject, combineLatest, of, iif, ReplaySubject } from 'rxjs';
import { AccountTransaction } from '../../store/models';
import { dateFormat } from '../../utils';
import { takeUntil, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { MatDatepicker } from '@angular/material/datepicker';
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
      this.store.pipe(select(selectTransactionsDate), take(1)).subscribe(selectedDate => {
        this.store.dispatch(
          searchAccountTransactions({ accountId: value, filter: { startDate: dateFormat(selectedDate) } })
        );
      });
      this.accountId$.next(value);
    }
  }
  @Input() showAllAccount = false;

  accountTransactions: AccountTransaction[] = [];
  maxDate: Date;
  selectedDate!: Date;
  selectedDateLabel$ = new ReplaySubject<string>(1);
  selectedTabIndex = 0;
  selectedTabIndex$ = new BehaviorSubject(0);
  searching$!: Observable<boolean>;

  private accountId$ = new ReplaySubject<string>(1);
  private destroyed$ = new Subject<void>();

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {
    this.maxDate = new Date();
  }

  ngOnInit() {
    this.store.pipe(select(selectTransactionsDate)).subscribe(selectedDate => {
      this.selectedDate = selectedDate;
      const dateLabel = dateFormat(selectedDate, 'MMMM YYYY');
      this.selectedDateLabel$.next(dateLabel);
    });
    if (this.showAllAccount) {
      this.store.dispatch(searchAllAccountTransactions({ filter: { startDate: dateFormat(this.selectedDate) } }));
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

  chosenMonthHandler(selectedDate: Date, datepicker: MatDatepicker<any>) {
    datepicker.close();
    const startDate = new Date(selectedDate.setDate(1));
    const endDate = new Date(selectedDate.setDate(this.getLastDayOfMonth(selectedDate)));
    const filter = {
      startDate: dateFormat(startDate),
      endDate: dateFormat(endDate)
    };
    if (this.showAllAccount) {
      this.store.dispatch(searchAllAccountTransactions({filter}));
    } else {
      this.store.dispatch(
        searchAccountTransactions({accountId: (this.accountId as string), filter})
      );
    }

    this.store.dispatch(
      updateTransactionsSelectedDate({selectedDate: startDate})
    );
  }

  getLastDayOfMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
}
