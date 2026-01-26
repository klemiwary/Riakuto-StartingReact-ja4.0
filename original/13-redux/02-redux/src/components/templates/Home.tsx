import type { FC } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import Counter from 'components/ecosystems/Counter';
import CountingBeads from 'components/ecosystems/CountingBeads';

type Props = { pageTitle: string };

const Home: FC<Props> = ({ pageTitle }) => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {pageTitle}
    </Heading>
    <Center>
      <Counter />
    </Center>
    <Box w="3xl">
      <CountingBeads />
    </Box>
  </>
);

export default Home;
