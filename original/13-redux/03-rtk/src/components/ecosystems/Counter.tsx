import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from 'stores/counter';
import type { CounterState } from 'stores/counter';
import CounterBoard from 'components/molecules/CounterBoard';

const Counter: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { added, decremented, incremented } = counterSlice.actions;

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented())}
      increment={() => dispatch(incremented())}
    />
  );
};

export default Counter;
