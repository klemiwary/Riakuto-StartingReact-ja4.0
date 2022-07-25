import type { FC } from 'react';
import { useCallback } from 'react';
import { Avatar, Box, Text, Wrap, WrapItem } from '@chakra-ui/react';
import hash from 'object-hash';

type Props = { username: string; count: number };

const Users: FC<Props> = ({ username, count = 0 }) => {
  const genHash = useCallback(
    (text: string, id = 0) => String(hash({ [id]: text })).substring(0, 18),
    []
  );

  const detectColor = useCallback((text: string, id = 0) => {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'teal',
      'blue',
      'cyan',
      'purple',
      'pink',
      'gray',
    ];

    const hashVal = String(hash({ [id]: text }));
    const strArr = hashVal.split('').filter((c) => c.match(/[0-9]/));
    const num = Number(strArr[0]) || 0;

    return colors[num] + '.400';
  }, []);

  return (
    <Wrap mt={10} w="5xl">
      {[...Array(count).keys()].map((id) => (
        <WrapItem key={id}>
          <Box p={4} w="15rem" borderWidth={1} margin={1}>
            <Avatar size="md" mb={3} bg={detectColor(username, id)} />
            <Text
              fontWeight="bold"
              fontSize="lg"
              casing="uppercase"
              letterSpacing="wide"
              color={detectColor(username, id)}
            >
              {username || '---'}
            </Text>
            <Text color="gray.400">
              # {username ? genHash(username, id) : '******************'}
            </Text>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Users;
