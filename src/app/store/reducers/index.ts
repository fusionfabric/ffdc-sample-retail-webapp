import * as fromAccount from './account.reducer';
import * as fromAccountTransaction from './account-transaction.reducer';
import { Action, combineReducers, createSelector, ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { MergedRoute } from './merged-route';
import { InjectionToken } from '@angular/core';
import { AccountEntity, AccountTransaction } from '../models';
import { Dictionary } from '@ngrx/entity';

export interface AppState {
  accounts: fromAccount.State;
  accountTransactions: fromAccountTransaction.State;
  router: fromRouter.RouterReducerState<MergedRoute>;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    accounts: fromAccount.reducer,
    accountTransactions: fromAccountTransaction.reducer,
    router: fromRouter.routerReducer
  })
});

export const selectRouterState = createFeatureSelector<AppState, fromRouter.RouterReducerState<MergedRoute>>('router');
export const selectAccountState = createFeatureSelector<AppState, fromAccount.State>('accounts');
export const selectAccountTransactionState = createFeatureSelector<AppState, fromAccountTransaction.State>(
  'accountTransactions'
);

export const {
  selectIds: selectAccountIds,
  selectEntities: selectAccountEntities,
  selectAll: selectAllAccounts,
  selectTotal: selectTotalAccounts
} = fromAccount.adapter.getSelectors(selectAccountState);

export const selectAccountById = createSelector(
  selectAccountEntities,
  (accountEntities: Dictionary<AccountEntity>, props: { accountId: string }) => {
    return accountEntities[props.accountId];
  }
);


export const {
  selectIds: selectAccountTransactionIds,
  selectEntities: selectAccountTransactionEntities,
  selectAll: selectAllAccountTransactions,
  selectTotal: selectTotalAccountTransactions
} = fromAccountTransaction.adapter.getSelectors(selectAccountTransactionState);

export const isSearchingAccountTransactions = createSelector(
  selectAccountTransactionState,
  state => state.searching
);

export const selectTransactionsDate = createSelector(
  selectAccountTransactionState,
  state => state.selectedDate
);

export const selectAccountTransactionsWithAccountInfo = createSelector(
  selectAccountEntities,
  selectAllAccountTransactions,
  (accounts, accountTransactions) => {
    return accountTransactions
      .map(transaction => ({ ...transaction, ...{ account: accounts[transaction.accountId] } }))
      .sort((a, b) => new Date(a.transactionDate).getTime() - new Date(b.transactionDate).getTime());
  }
);

export const selectAccountTransactionsWithAccountInfoForAccount = createSelector(
  selectAccountEntities,
  selectAllAccountTransactions,
  (accounts: Dictionary<AccountEntity>, accountTransactions: AccountTransaction[], props: {accountId: string}) => {
    return accountTransactions
      .filter(transaction => transaction.accountId === props.accountId)
      .map(transaction => ({ ...transaction, ...{ account: accounts[transaction.accountId] } }))
      .sort((a, b) => new Date(a.transactionDate).getTime() - new Date(b.transactionDate).getTime());
  }
);
export const {
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = fromRouter.getSelectors(selectRouterState);
