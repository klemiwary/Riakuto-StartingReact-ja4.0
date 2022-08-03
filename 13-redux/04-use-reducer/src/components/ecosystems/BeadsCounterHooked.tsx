import type { FC } from 'react';
import { useCounter } from 'hooks/useCounter';
import BeadsCounterFrame from 'components/organisms/BeadsCounterFrame';

const BeadsCounter: FC = () => {
  const { count, decrement, increment, add } = useCounter();

  return <BeadsCounterFrame {...{ count, decrement, increment, add }} />;
};

export default BeadsCounter;
