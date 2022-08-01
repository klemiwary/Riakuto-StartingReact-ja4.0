import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import type { Player } from 'domains';

type Props = {
  players: Player[];
  color?: string;
  isLoading?: boolean;
};

const PlayerList: FC<Props> = ({
  players = [],
  color = 'teal.500',
  isLoading = false,
}) => (
  <>
    {isLoading ? (
      <Flex my={14} h="20rem" justify="center" align="center">
        <Spinner size="xl" color={color} />
      </Flex>
    ) : (
      <List my={10}>
        {players.map((player) => (
          <ListItem key={player.id} m={6}>
            <Flex>
              <Avatar size="md" bg={color} />
              <Box ml={3}>
                <Text>{player.name}</Text>
                <Text as="span">{player.grade}年生</Text>
                <Text as="span" ml={2}>
                  {player.height ?? '???'}
                  cm
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    )}
  </>
);

export default PlayerList;
