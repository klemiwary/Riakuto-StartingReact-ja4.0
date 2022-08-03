import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import BeadsCounter from 'components/ecosystems/BeadsCounter';

type Props = { pageTitle: string };

const Home: FC<Props> = ({ pageTitle }) => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {pageTitle}
    </Heading>
    <BeadsCounter />
  </>
);

export default Home;
