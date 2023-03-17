import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as step1 from '../step1/store/step1.reducer';

export interface AppState {
  step1: step1.State;
}

export const reducers: ActionReducerMap<AppState> = {
  step1: step1.step1Reducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
// export const appReducer: ActionReducerMap<AppState> = {
//   shoppingList: fromShoppingList.shoppingListReducer,
//   auth: fromAuth.authReducer,
//   recipes: fromRecipes.recipeReducer
// };
