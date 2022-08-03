import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { CounterState } from 'stores/reducers';
import ColorfulBeads from 'components/molecules/ColorfulBeads';

const CountingBeads: FC<{ count?: number }> = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  return <ColorfulBeads count={count} />;
};

export default CountingBeads;
