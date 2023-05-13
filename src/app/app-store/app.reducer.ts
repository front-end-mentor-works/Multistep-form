import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as step1 from '../step1/store/step1.reducer';
import * as step2 from '../step2/store/step2.reducer';
import * as step3 from '../step3/store/step3.reducer';

export interface AppState {
  step1: step1.State;
  step2: step2.PlanState;
  step3: step3.addonState;
}

export const reducers: ActionReducerMap<AppState> = {
  step1: step1.step1Reducer,
  step2: step2.planReducer,
  step3: step3.addonReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
// export const appReducer: ActionReducerMap<AppState> = {
//   shoppingList: fromShoppingList.shoppingListReducer,
//   auth: fromAuth.authReducer,
//   recipes: fromRecipes.recipeReducer
// };
