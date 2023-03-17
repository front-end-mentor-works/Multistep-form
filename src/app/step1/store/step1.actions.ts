import { createAction, props } from '@ngrx/store';

export const step1Submit = createAction(
  'step1Submit',
  props<{
    name: string;
    email: string;
    phone: string;
    error: boolean;
  }>()
);
