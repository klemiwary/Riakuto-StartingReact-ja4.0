import type { FC } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { capitalize } from 'utils/string';
import MemberList from 'components/ecosystems/MemberList';
import HomeButton from 'components/organisms/HomeButton';

type Props = {
  orgCode: string;
};

const Home: FC<Props> = ({ orgCode }) => {
  const pageTitle = `${capitalize(orgCode) || '****'} の開発メンバー`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <header>
        <Heading as="h1">{pageTitle}</Heading>
      </header>{' '}
      <Center>{orgCode && <MemberList orgCode={orgCode} />}</Center>
      <HomeButton my={12} />
    </>
  );
};

export default Home;
