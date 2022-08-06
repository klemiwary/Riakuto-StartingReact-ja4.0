import type { FC } from 'react';
import { Avatar, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { User } from 'domains/github';
import styles from './UserList.module.css';

type Props = { users: User[] };

const UserList: FC<Props> = ({ users = [] }) => (
  <Wrap mt={10} w="5xl" className={styles.link}>
    {users.map((user) => (
      <WrapItem key={user.id}>
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noreferrer"
        >
          <Stack
            p={4}
            w="15rem"
            borderWidth={1}
            margin={1}
            direction="row"
            rounded="md"
            boxShadow="sm"
            className={styles.card}
          >
            <Avatar size="md" src={user.avatarUrl} />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{user.login}</Text>
              <Text color={'gray.500'}>GitHub ID: {user.id}</Text>
            </Stack>
          </Stack>
        </a>
      </WrapItem>
    ))}
  </Wrap>
);

export default UserList;
