export const CounterActions = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  ADD: 'ADD',
} as const;

type ValueOf<T> = T[keyof T];

export interface CounterAction {
  type: ValueOf<typeof CounterActions>;
  amount?: number;
}

export const decrement = (): CounterAction => ({
  type: CounterActions.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActions.INCREMENT,
});

export const add = (amount: number): CounterAction => ({
  type: CounterActions.ADD,
  amount,
});
