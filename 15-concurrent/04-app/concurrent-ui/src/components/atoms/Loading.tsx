import type { FC } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

const Loading: FC = () => (
  <Flex my={14} h="20rem" justify="center" align="center">
    <Spinner size="xl" color="teal" />
  </Flex>
);

export default Loading;
