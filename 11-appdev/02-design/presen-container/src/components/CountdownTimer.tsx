import type { FC } from 'react';
import { useCountdownTimer } from 'hooks/useCountdownTimer';
import TimerBox from './TimerBox';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

const CountdownTimer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
  const [timeLeft, reset] = useCountdownTimer(maxCount);

  return <TimerBox {...{ timeLeft, reset }} />;
};

export default CountdownTimer;
