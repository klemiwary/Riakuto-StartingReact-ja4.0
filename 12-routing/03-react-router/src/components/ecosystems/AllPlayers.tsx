import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { playerData } from 'data';
import { Helmet } from 'react-helmet-async';
import PlayerList from 'components/organisms/PlayerList';

const SORT = {
  height: '身長順',
  grade: '学年順',
};
type Props = { sortType?: keyof typeof SORT; my?: number | string };

const AllPlayers: FC<Props> = ({ sortType = 'height', my = 0 }) => {
  const players = playerData.sort((p1, p2) =>
    Number(p1[sortType]) < Number(p2[sortType]) ? -1 : 1
  );

  return (
    <Box my={my} w="2xl">
      <Helmet>
        <title>登場人物｜{SORT[sortType]}</title>
      </Helmet>
      <Heading as="h2" size="lg">
        すべての選手｜{SORT[sortType]}
      </Heading>
      <PlayerList players={players} />
    </Box>
  );
};

export default AllPlayers;
