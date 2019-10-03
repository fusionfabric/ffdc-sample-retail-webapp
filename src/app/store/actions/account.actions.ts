import { createAction, props } from '@ngrx/store';

export const loadSummaryOfAccounts = createAction('[Account] Retrieve a Summary of Accounts for an Account Holder');

export const loadExtendedAccounts = createAction('[Account] Retrieve All Extended Account Information');

export const loadExtendedAndDetailedAccounts = createAction(
  '[Account] Retrieve All Account Extended and Detailed Information'
);

export const getExtendedAndDetailedForAccount = createAction(
  '[Account] Retrieve Extended and Detailed Information for an Account',
  props<{ accountId: string }>()
);

export const getAccountDetails = createAction(
  '[Account] Retrieve Account Detail for an Account',
  props<{ accountId: string }>()
);

export const getAccountBalance = createAction('[Account] Retrieve an Account Balance', props<{ accountId: string }>());
