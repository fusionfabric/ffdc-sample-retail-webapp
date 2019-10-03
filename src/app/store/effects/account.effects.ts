import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AccountActions, AccountApiActions } from '../actions';
import { AccountApiService } from '../../services';
import { of } from 'rxjs';

@Injectable()
export class AccountEffects {
  loadSummaryOfAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.loadSummaryOfAccounts),
      switchMap(() =>
        this.accountApi.loadSummaryOfAccounts().pipe(
          map(accounts => AccountApiActions.loadSummaryOfAccountsSuccess({ accounts })),
          catchError(error => of(AccountApiActions.loadSummaryOfAccountsFailure({ error })))
        )
      )
    )
  );

  loadExtendedAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.loadExtendedAccounts),
      switchMap(() =>
        this.accountApi.loadExtendedAccounts().pipe(
          map(accounts => AccountApiActions.loadExtendedAccountsSuccess({ accounts })),
          catchError(error => of(AccountApiActions.loadExtendedAccountsFailure({ error })))
        )
      )
    )
  );

  loadExtendedAndDetailedAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.loadExtendedAndDetailedAccounts),
      switchMap(() =>
        this.accountApi.loadExtendedAndDetailedAccounts().pipe(
          map(accounts => AccountApiActions.loadExtendedAndDetailedAccountsSuccess({ accounts })),
          catchError(error => of(AccountApiActions.loadExtendedAndDetailedAccountsFailure({ error })))
        )
      )
    )
  );

  getExtendedAndDetailedForAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.getExtendedAndDetailedForAccount),
      switchMap(({ accountId }) =>
        this.accountApi.getExtendedAndDetailedForAccount(accountId).pipe(
          map(account => AccountApiActions.getExtendedAndDetailedForAccountSuccess({ account })),
          catchError(error => of(AccountApiActions.getExtendedAndDetailedForAccountFailure({ error })))
        )
      )
    )
  );

  getAccountDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.getAccountDetails),
      switchMap(({ accountId }) =>
        this.accountApi.getAccountDetails(accountId).pipe(
          map(accountDetails => AccountApiActions.getAccountDetailsSuccess({ accountDetails })),
          catchError(error => of(AccountApiActions.getAccountDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private accountApi: AccountApiService) {}
}
