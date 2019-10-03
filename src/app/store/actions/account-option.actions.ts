import { createAction, props } from '@ngrx/store';

export const getAccountOptions = createAction(
  '[Account Options] Retrieve Personalized Account Options',
  props<{ accountId: string }>()
);

export const updateAccountOptions = createAction(
  '[Account Options] Update Personalized Account Options',
  props<{ accountId: string }>()
);
