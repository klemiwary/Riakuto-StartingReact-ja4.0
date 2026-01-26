import type { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { schoolData } from 'data';
import { Helmet } from 'react-helmet-async';
import CharacterIndex from 'components/organisms/CharacterIndex';
import StoryOutline from 'components/organisms/StoryOutline';

const title = 'SLAM DUNK';

const Home: FC = () => (
  <Box maxW="3xl">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Heading as="h1" size="xl" my={4}>
      {title}
    </Heading>
    <StoryOutline my={10} />
    <CharacterIndex schools={schoolData} my={16} />
  </Box>
);

export default Home;
