import { useReducer } from 'react';
import type { FC } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import BeadsCounterFrame from 'components/organisms/BeadsCounterFrame';

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

const BeadsCounter: FC = () => {
  const initialCount = 0;
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count })
  );
  const { added, decremented, incremented } = counterSlice.actions;

  return (
    <BeadsCounterFrame
      count={state.count}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
      add={(amount: number) => dispatch(added(amount))}
    />
  );
};

export default BeadsCounter;
