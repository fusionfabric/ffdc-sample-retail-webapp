import { createAction, props } from '@ngrx/store';
import {
  AccountSummary,
  ExtendedAccount,
  ExtendedDetaildedAccount,
  AccountDetail,
  AccountBalance
} from '../models/account';

export const loadSummaryOfAccountsSuccess = createAction(
  '[Account Api] Retrieve a Summary of Accounts for an Account Holder Success',
  props<{ accounts: AccountSummary[] }>()
);
export const loadSummaryOfAccountsFailure = createAction(
  '[Account Api] Retrieve a Summary of Accounts for an Account Holder Failure',
  props<{ error: any }>()
);

export const loadExtendedAccountsSuccess = createAction(
  '[Account Api] Retrieve All Extended Account Information Success',
  props<{ accounts: ExtendedAccount[] }>()
);
export const loadExtendedAccountsFailure = createAction(
  '[Account Api] Retrieve All Extended Account Information Failure',
  props<{ error: any }>()
);

export const loadExtendedAndDetailedAccountsSuccess = createAction(
  '[Account Api] Retrieve All Account Extended and Detailed Information Success',
  props<{ accounts: ExtendedDetaildedAccount[] }>()
);
export const loadExtendedAndDetailedAccountsFailure = createAction(
  '[Account Api] Retrieve All Account Extended and Detailed Information Failure',
  props<{ error: any }>()
);

export const getExtendedAndDetailedForAccountSuccess = createAction(
  '[Account Api] Retrieve Extended and Detailed Information for an Account Success',
  props<{ account: ExtendedDetaildedAccount }>()
);
export const getExtendedAndDetailedForAccountFailure = createAction(
  '[Account Api] Retrieve Extended and Detailed Information for an Account Failure',
  props<{ error: any }>()
);

export const getAccountDetailsSuccess = createAction(
  '[Account Api] Retrieve Account Detail for an Account Success',
  props<{ accountDetails: AccountDetail[] }>()
);
export const getAccountDetailsFailure = createAction(
  '[Account Api] Retrieve Account Detail for an Account Failure',
  props<{ error: any }>()
);

export const getAccountBalanceSuccess = createAction(
  '[Account Api] Retrieve an Account Balance Success',
  props<{ accountBalances: AccountBalance[] }>()
);
export const getAccountBalanceFailure = createAction(
  '[Account Api] Retrieve an Account Balance Failure',
  props<{ error: any }>()
);
