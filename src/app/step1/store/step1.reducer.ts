import { createReducer, on } from '@ngrx/store';
import { step1Submit } from './step1.actions';
export interface State {
  name: string;
  email: string;
  phone: string;
  error: boolean;
}

const initialState: State = {
  name: '',
  email: '',
  phone: '',
  error: false,
};

export const step1Reducer = createReducer(
  initialState,
  on(step1Submit, (state, action) => {
    return {
      ...state,
      ...action,
    };
  })
);
