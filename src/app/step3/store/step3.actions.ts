import { createAction, props } from '@ngrx/store';
import { Addon, Addons } from 'src/app/step2/plan.service';

export const loadAddons = createAction('load addons');
export const loadAddonSuccess = createAction(
  'load add on success',
  props<{ addOns: Addons }>()
);
export const loadAddonsFailure = createAction(
  '[Plan] Load Plans Failure',
  props<{ error: any }>()
);
export const selectAddon = createAction(
  'select-addon',
  props<{ selectedAddons: Addon[] }>()
);
