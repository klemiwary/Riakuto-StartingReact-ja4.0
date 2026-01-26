import { useReducer } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}
const initialState: CounterState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decremented: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
    incremented: (state) => {
      state.count++;
    },
  },
});

type ReturnValue = {
  count: number;
  decrement: () => void;
  increment: () => void;
  add: (amount: number) => void;
};

export const useCounter = (): ReturnValue => {
  const initialCount = 0;
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count })
  );

  const { count } = state;
  const { added, decremented, incremented } = counterSlice.actions;
  const decrement = () => dispatch(decremented());
  const increment = () => dispatch(incremented());
  const add = (amount: number) => dispatch(added(amount));

  return { count, decrement, increment, add };
};
