import type { Reducer } from 'redux';
import { CounterActions as Action } from './actions';
import type { CounterAction } from './actions';

export interface CounterState {
  count: number;
}
export const initialState: CounterState = { count: 0 };

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Action.DECREMENT:
      return {
        ...state,
        count: state.count < 1 ? 0 : state.count - 1,
      };
    case Action.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case Action.ADD:
      return {
        ...state,
        count: state.count + (action.amount ?? 0),
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
