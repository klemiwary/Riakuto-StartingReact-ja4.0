import type { FC } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import orgCodes from 'data/orgCodes';
import { Helmet } from 'react-helmet-async';
import CompanyList from 'components/organisms/CompanyList';

const pageTitle = '会社一覧';

const Home: FC = () => (
  <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <header>
      <Heading as="h1">{pageTitle}</Heading>
    </header>
    <Center>
      <Box w="2xl">
        <CompanyList orgCodes={orgCodes} />
      </Box>
    </Center>
  </>
);

export default Home;
