import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import { getMembers } from 'domains/github';
import type { User } from 'domains/github';
import UserList from 'components/organisms/UserList';

type Props = {
  orgCode: string;
};

const MemberList: FC<Props> = ({ orgCode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const usersData = await getMembers(orgCode);
        setUsers(usersData);
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [orgCode]);

  return isLoading ? (
    <Flex my={14} h="20rem" justify="center" align="center">
      <Spinner size="xl" color="teal" />
    </Flex>
  ) : (
    <UserList users={users} />
  );
};

export default MemberList;
