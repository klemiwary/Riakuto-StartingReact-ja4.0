import { Suspense } from 'react';
import type { FC } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import useSWR from 'swr';
import { getMembers } from 'domains/github';
import { skimArgs } from 'utils/fn';
import UserList from 'components/organisms/UserList';

const Loading: FC = () => (
  <Flex my={14} h="20rem" justify="center" align="center">
    <Spinner size="xl" color="teal" />
  </Flex>
);

type Props = {
  orgCode: string;
};

const MemberList: FC<Props> = ({ orgCode }) => {
  const { data: users = [] } = useSWR(
    [orgCode, 'members'],
    skimArgs(getMembers)
  );

  return <UserList users={users} />;
};

const SuspendableMemberList: FC<Props> = ({ orgCode }) => (
  <Suspense fallback={<Loading />}>
    <MemberList orgCode={orgCode} />
  </Suspense>
);

export default SuspendableMemberList;
