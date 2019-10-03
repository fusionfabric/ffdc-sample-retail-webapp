import { EntityState, createEntityAdapter, EntityAdapter, Update } from '@ngrx/entity';
import { AccountTransaction } from '../models';
import { createReducer, on } from '@ngrx/store';

import { AccountTransactionApiActions, AccountTransactionActions } from '../actions';

export interface State extends EntityState<AccountTransaction> {
  searching: boolean;
}

export const adapter: EntityAdapter<AccountTransaction> = createEntityAdapter<AccountTransaction>({
  selectId: (transaction: AccountTransaction) => transaction.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({ searching: false });

export const reducer = createReducer(
  initialState,
  on(
    AccountTransactionActions.searchAllAccountTransactions,
    AccountTransactionActions.searchAccountTransactions,
    (state, { type }) => {
      return { ...state, ...{ searching: true } };
    }
  ),
  on(AccountTransactionApiActions.searchAccountTransactionsSuccess, (state, { type, accountTransactions }) => {
    state.searching = false;
    return adapter.upsertMany(accountTransactions, state);
  }),
  on(AccountTransactionApiActions.searchAccountTransactionsFailure, (state, { type }) => {
    return { ...state, ...{ searching: false } };
  })
);
