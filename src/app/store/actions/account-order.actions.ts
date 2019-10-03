import { createAction, props } from '@ngrx/store';

export const getAccountOrder = createAction(
  '[Account Order] Retrieve the Personalized Account Order',
  props<{ accountId: string }>()
);

export const updateAccountOrder = createAction(
  '[Account Order] Update Personalized Account Order',
  props<{ accountId: string }>()
);
