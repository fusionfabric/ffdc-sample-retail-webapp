import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';

import { AccountTransactionActions, AccountTransactionApiActions } from '../actions';
import { AccountTransactionApiService } from '../../services';
import { of, forkJoin } from 'rxjs';
import { AppState, selectAllAccounts } from '../reducers';
import { Store, select } from '@ngrx/store';
import { AccountTransaction } from '../models';

@Injectable()
export class AccountTransactionEffects {
  searchTransactionForAllAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountTransactionActions.searchAllAccountTransactions),
      withLatestFrom(this.store.pipe(select(selectAllAccounts))),
      switchMap(([action, accounts]) => {
        return forkJoin(
          accounts.map(account =>
            this.accountTransactionApi
              .searchAccountTransactions(account.accountId, action.filter)
              .pipe(catchError(() => of<AccountTransaction[]>([])))
          )
        ).pipe(
          map(allTransactions => allTransactions.reduce((transactions, item) => [...transactions, ...item], [])),
          map(accountTransactions =>
            AccountTransactionApiActions.searchAccountTransactionsSuccess({ accountTransactions })
          )
        );
      })
    )
  );

  searchAccountTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountTransactionActions.searchAccountTransactions),
      switchMap(action => {
        return this.accountTransactionApi.searchAccountTransactions(action.accountId, action.filter).pipe(
          map(accountTransactions =>
            AccountTransactionApiActions.searchAccountTransactionsSuccess({ accountTransactions })
          ),
          catchError(error => of(AccountTransactionApiActions.searchAccountTransactionsFailure({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private accountTransactionApi: AccountTransactionApiService
  ) {}
}
