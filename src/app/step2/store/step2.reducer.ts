import { createReducer, on } from '@ngrx/store';
import { Plan, plans } from '../../plan';
import {
  loadPlansSuccess,
  loadPlansFailure,
  selectPlan,
  changePlanType,
} from './step2.actions';

export interface PlanState {
  plans: plans;
  selectedPlan: Plan | null;
  error: any;
  planType: 'monthly' | 'yearly';
}

export const initialState: PlanState = {
  plans: {
    monthly: [],
    yearly: [],
  },
  selectedPlan: null,
  planType: 'monthly',
  error: null,
};

export const planReducer = createReducer(
  initialState,
  on(loadPlansSuccess, (state, { plans }) => ({
    ...state,
    plans,
  })),
  on(loadPlansFailure, (state, { error }) => ({
    ...state,
    error,
    selectedPlan: null,
  })),
  on(selectPlan, (state, { selectedPlan, planType }) => ({
    ...state,
    selectedPlan,
    planType,
  })),
  on(changePlanType, (state, { planType }) => ({
    ...state,
    planType,
  }))
);
