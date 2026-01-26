import { useMemo, useState, useTransition, Suspense } from 'react';
import type { FC } from 'react';
import { Box, Center, Divider, Heading, VStack } from '@chakra-ui/react';
import orgCodes from 'data/orgCodes';
import { randomPick } from 'utils/array';
import Loading from 'components/atoms/Loading';
import MemberList from 'components/ecosystems/MemberList';
import OrgInfo from 'components/ecosystems/OrgInfo';
import ErrorRecovery from 'components/organisms/ErrorRecovery';
import OrgSearchForm from 'components/organisms/OrgSearchForm';
import styles from './Home.module.css';

type Props = { pageTitle: string };

const Home: FC<Props> = ({ pageTitle }) => {
  const [orgCode, setOrgCode] = useState('');
  const [isPending, startTransition] = useTransition();
  const suggestList = useMemo(() => randomPick(orgCodes, 8), []);

  return (
    <>
      <Box as="header" my="1rem">
        <Heading as="h1">{pageTitle}</Heading>
      </Box>
      <Center m="4rem 0 1rem">
        <OrgSearchForm
          {...{ suggestList, setOrgCode, startTransition, isPending }}
        />
      </Center>
      <Divider />
      <Center>
        <VStack
          mt="2rem"
          w="2xl"
          spacing="1rem"
          className={isPending ? styles.loading : ''}
        >
          {orgCode && (
            <ErrorRecovery onReset={() => setOrgCode('')}>
              <Suspense fallback={<Loading />}>
                <OrgInfo orgCode={orgCode} />
                <MemberList orgCode={orgCode} />
              </Suspense>
            </ErrorRecovery>
          )}
        </VStack>
      </Center>
    </>
  );
};

export default Home;
