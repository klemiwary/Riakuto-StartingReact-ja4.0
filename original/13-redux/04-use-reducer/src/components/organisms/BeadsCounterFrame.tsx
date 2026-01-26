import type { FC } from 'react';
import { Box, Center } from '@chakra-ui/react';
import ColorfulBeads from 'components/molecules/ColorfulBeads';
import CounterBoard from 'components/molecules/CounterBoard';

type Props = {
  count?: number;
  decrement?: () => void;
  increment?: () => void;
  add?: (amount: number) => void;
};

const BeadsCounterFrame: FC<Props> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
}) => (
  <Box>
    <Center>
      <CounterBoard {...{ count, add, decrement, increment }} />
    </Center>
    <Box w="3xl">
      <ColorfulBeads count={count} />
    </Box>
  </Box>
);

export default BeadsCounterFrame;
