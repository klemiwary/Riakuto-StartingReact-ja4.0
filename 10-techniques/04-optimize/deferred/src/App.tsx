import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import ProfileWriter from 'components/ProfileWriter';
import './App.css';

const App: FC = () => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {import.meta.env.VITE_APP_TITLE}
    </Heading>
    <ProfileWriter count={200} />
  </>
);

export default App;
