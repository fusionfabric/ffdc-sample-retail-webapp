import { createAction, props } from '@ngrx/store';
import {
  AccountTransaction,
  AccountTransactionDetail,
  UpdatedAccountTransaction,
  AccountTransactionSavedImage,
  AccountTransactionCheckedImage
} from '../models';

export const searchAccountTransactionsSuccess = createAction(
  '[Account transaction] Search for Account Holders Transactions Success',
  props<{ accountTransactions: AccountTransaction[] }>()
);

export const getAccountTransactionDetailSuccess = createAction(
  '[Account transaction] Retrieve Transaction Details Success',
  props<{ accountId: string; transactionId: string; transactionDetails: AccountTransactionDetail[] }>()
);
export const updateAccountTransactionSuccess = createAction(
  '[Account transaction] Update an Existing Transaction Success',
  props<{ accountId: string; transactionId: string; updaUpdatedAccountTransaction: UpdatedAccountTransaction }>()
);
export const getSavedImageAccountTransactionSuccess = createAction(
  '[Account transaction] Retrieve Saved Image for a Transaction Success',
  props<{ accountId: string; transactionId: string; savedImage: AccountTransactionSavedImage }>()
);

export const getCheckedImageAccountTransactionSuccess = createAction(
  '[Account transaction] Retrieve Check Image for a Transaction Success',
  props<{ accountId: string; transactionId: string; checkedImage: AccountTransactionCheckedImage }>()
);

// Failure
export const searchAccountTransactionsFailure = createAction(
  '[Account transaction] Search for Account Holders Transactions Failure',
  props<{ error: any }>()
);
export const getAccountTransactionDetailFailure = createAction(
  '[Account transaction] Retrieve Transaction Details Failure',
  props<{ error: any }>()
);
export const updateAccountTransactionFailure = createAction(
  '[Account transaction] Update an Existing Transaction Failure',
  props<{ error: any }>()
);
export const getSavedImageAccountTransactionFailure = createAction(
  '[Account transaction] Retrieve Saved Image for a Transaction Failure',
  props<{ error: any }>()
);

export const getCheckedImageAccountTransactionFailure = createAction(
  '[Account transaction] Retrieve Check Image for a Transaction Failure',
  props<{ error: any }>()
);
