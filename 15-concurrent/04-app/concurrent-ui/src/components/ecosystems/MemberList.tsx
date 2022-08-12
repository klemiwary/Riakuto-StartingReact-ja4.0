import type { FC } from 'react';
import useSWR from 'swr';
import { getMembers } from 'domains/github';
import { skimArgs } from 'utils/fn';
import UserList from 'components/organisms/UserList';

type Props = { orgCode: string };

const MemberList: FC<Props> = ({ orgCode }) => {
  const { data: users = [] } = useSWR(
    [orgCode, 'members'],
    skimArgs(getMembers)
  );

  return <UserList users={users} />;
};

export default MemberList;
