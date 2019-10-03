import { EntityState, createEntityAdapter, EntityAdapter, Update } from '@ngrx/entity';
import { AccountEntity } from '../models';
import { createReducer, on } from '@ngrx/store';

import { AccountApiActions } from '../actions';

export interface State extends EntityState<AccountEntity> {}

export const adapter: EntityAdapter<AccountEntity> = createEntityAdapter<AccountEntity>({
  selectId: (account: AccountEntity) => account.accountId,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(
    AccountApiActions.loadSummaryOfAccountsSuccess,
    AccountApiActions.loadExtendedAccountsSuccess,
    AccountApiActions.loadExtendedAndDetailedAccountsSuccess,
    (state, { type, accounts }) => {
      const updateAccounts: Update<AccountEntity>[] = [];
      const insertAccounts: AccountEntity[] = [];

      for (const account of accounts) {
        if (AccountApiActions.loadExtendedAccountsSuccess.type === type) {
          account.loadedExtend = true;
        }
        if (AccountApiActions.loadExtendedAndDetailedAccountsSuccess.type === type) {
          account.loadedExtend = true;
          account.loadedExtend = true;
        }
        if (state.entities[account.accountId]) {
          updateAccounts.push({ id: account.accountId, changes: account });
        } else {
          insertAccounts.push(account);
        }
      }
      state = adapter.updateMany(updateAccounts, state);
      return adapter.addMany(insertAccounts, state);
    }
  ),
  on(
    AccountApiActions.getExtendedAndDetailedForAccountSuccess,
    (state, {  account }) => {
      return adapter.upsertOne(account, state);
    }
  )
);
