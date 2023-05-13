import { createAction, props } from '@ngrx/store';
import { Plan, plans } from '../../plan';

export const loadPlans = createAction('[Plan] Load Plans');
export const loadPlansSuccess = createAction(
  '[Plan] Load Plans Success',
  props<{ plans: plans }>()
);
export const loadPlansFailure = createAction(
  '[Plan] Load Plans Failure',
  props<{ error: any }>()
);
export const selectPlan = createAction(
  'select-plan',
  props<{ selectedPlan: Plan | null; planType: 'monthly' | 'yearly' }>()
);

export const changePlanType = createAction(
  'change-plan-type',
  props<{ planType: 'monthly' | 'yearly' }>()
);
