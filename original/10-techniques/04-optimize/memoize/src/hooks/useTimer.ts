import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { SyntheticEvent } from 'react';
import { getPrimes } from 'utils/prime';

const useTimer = (maxCount: number): [number, boolean, () => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const primes = useMemo(() => getPrimes(maxCount), [maxCount]);
  const intervalId = useRef<ReturnType<typeof setInterval>>();

  const tick = useCallback(() => setTimeLeft((t) => t - 1), []);
  const reset = useCallback(
    (event?: SyntheticEvent) => {
      event?.stopPropagation();

      if (intervalId.current !== undefined) {
        clearInterval(intervalId.current);
      }
      intervalId.current = setInterval(tick, 1000);
      setTimeLeft(maxCount);
    },
    [maxCount, tick]
  );

  useEffect(() => {
    reset();

    return () => clearInterval(intervalId.current);
  }, [reset]);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  return [timeLeft, primes.includes(timeLeft), reset];
};

export { useTimer };
