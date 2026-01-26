import type { FC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import DumpAssert from './DumpAssert';
import DumpCount from './DumpCount';
import DumpLog from './DumpLog';
import DumpObject from './DumpObject';

const ConsoleDump: FC = () => (
  <Wrap w="4xl" justify="center" spacing={8}>
    <WrapItem>
      <DumpLog />
    </WrapItem>
    <WrapItem>
      <DumpObject />
    </WrapItem>
    <WrapItem>
      <DumpCount />
    </WrapItem>
    <WrapItem>
      <DumpAssert />
    </WrapItem>
  </Wrap>
);

export default ConsoleDump;
