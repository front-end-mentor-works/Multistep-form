import { createReducer, on } from '@ngrx/store';
import { Addon, Addons } from 'src/app/step2/plan.service';
import {
  loadAddonSuccess,
  loadAddonsFailure,
  selectAddon,
} from './step3.actions';

export interface addonState {
  addons: Addons;
  selectedAddons: Addon[];
  error: any;
}

export const initialState: addonState = {
  addons: {
    monthly: [],
    yearly: [],
  },
  selectedAddons: [],
  error: null,
};

export const addonReducer = createReducer(
  initialState,
  on(loadAddonSuccess, (state, { addOns }) => ({
    ...state,
    addons: addOns,
  })),
  on(loadAddonsFailure, (state, { error }) => ({
    ...state,
    error,
    selectedAddons: [],
  })),
  on(selectAddon, (state, { selectedAddons }) => ({
    ...state,
    selectedAddons,
  }))
);
