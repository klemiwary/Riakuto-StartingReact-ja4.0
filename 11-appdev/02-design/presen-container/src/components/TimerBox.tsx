import type { FC } from 'react';
import { RepeatClockIcon as ResetIcon } from '@chakra-ui/icons';
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

type Props = { timeLeft?: number; reset?: () => void };

const TimerBox: FC<Props> = ({ timeLeft = 0, reset = () => undefined }) => (
  <Box p={5} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
    <Stat mb={2}>
      <StatLabel fontSize={18}>Count</StatLabel>
      <StatNumber fontSize={42}>{timeLeft}</StatNumber>
    </Stat>
    <Button
      w="xs"
      colorScheme="red"
      variant="solid"
      leftIcon={<ResetIcon />}
      onClick={reset}
    >
      Reset
    </Button>
  </Box>
);

export default TimerBox;
