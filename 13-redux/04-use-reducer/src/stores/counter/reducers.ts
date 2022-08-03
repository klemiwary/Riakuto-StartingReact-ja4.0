import { createReducer } from '@reduxjs/toolkit';
import { added, decremented, incremented } from './actions';

export interface CounterState {
  count: number;
}
const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(decremented, (state) => {
      if (state.count > 0) {
        state.count--;
      }
    })
    .addCase(incremented, (state) => {
      state.count++;
    })
    .addCase(added, (state, action) => {
      state.count += action.payload;
    });
});
