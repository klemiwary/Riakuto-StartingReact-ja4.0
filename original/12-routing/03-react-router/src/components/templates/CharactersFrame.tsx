import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import HomeButton from 'components/organisms/HomeButton';

const CharactersFrame: FC = () => (
  <Box maxW="3xl">
    <header>
      <Heading as="h1" size="xl" my={4}>
        『SLAM DUNK』登場人物
      </Heading>
    </header>
    <Outlet />
    <HomeButton my={16} />
  </Box>
);

export default CharactersFrame;
