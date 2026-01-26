import type { FC } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import useGetMembers from 'hooks/useGetMembers';
import UserList from 'components/organisms/UserList';

type Props = {
  orgCode: string;
};

const MemberList: FC<Props> = ({ orgCode }) => {
  const { users, isLoading } = useGetMembers(orgCode);

  return isLoading ? (
    <Flex my={14} h="20rem" justify="center" align="center">
      <Spinner size="xl" color="teal" />
    </Flex>
  ) : (
    <UserList users={users} />
  );
};

export default MemberList;
