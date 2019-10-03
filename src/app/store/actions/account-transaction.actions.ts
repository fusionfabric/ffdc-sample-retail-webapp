import { createAction, props } from '@ngrx/store';
import { AccountTransactionFilter } from '../models';

export const searchAccountTransactions = createAction(
  '[Account transaction] Search for Account Holders Transactions',
  props<{ accountId: string, filter: AccountTransactionFilter }>()
);

export const searchAllAccountTransactions = createAction(
  '[Account transaction] Search for All Account Holders Transactions',
  props<{ filter: AccountTransactionFilter }>()
);

export const getAccountTransactionDetail = createAction(
  '[Account transaction] Retrieve Transaction Details',
  props<{ accountId: string, transactionId: string }>()
);
export const updateAccountTransaction = createAction(
  '[Account transaction] Update an Existing Transaction',
  props<{ accountId: string, transactionId: string }>()
);
export const getSavedImageAccountTransaction = createAction(
  '[Account transaction] Retrieve Saved Image for a Transaction',
  props<{ accountId: string, transactionId: string }>()
);

export const getCheckedImageAccountTransaction = createAction(
  '[Account transaction] Retrieve Check Image for a Transaction',
  props<{ accountId: string, transactionId: string }>()
);
