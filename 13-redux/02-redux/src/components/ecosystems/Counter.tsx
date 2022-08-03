import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, increment } from 'stores/actions';
import type { CounterState } from 'stores/reducers';
import CounterBoard from 'components/molecules/CounterBoard';

const Counter: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default Counter;
