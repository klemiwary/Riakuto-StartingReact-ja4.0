import type { FC } from 'react';
import { useState } from 'react';
import { Center } from '@chakra-ui/react';
import CompanyTitle from 'components/ecosystems/CompanyTitle';
import MemberList from 'components/ecosystems/MemberList';
import HomeButton from 'components/organisms/HomeButton';

const Home: FC = () => {
  const [orgCode, setOrgCode] = useState('');

  return (
    <>
      <CompanyTitle setOrgCode={setOrgCode} />
      <Center>{orgCode && <MemberList orgCode={orgCode} />}</Center>
      <HomeButton my={12} />
    </>
  );
};

export default Home;
