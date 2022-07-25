import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import RegistrationForm from 'components/RegistrationForm';
import './App.css';

const App: FC = () => (
  <>
    <Heading size="lg" as="h1" my={8}>
      {import.meta.env.VITE_APP_TITLE}
    </Heading>
    <RegistrationForm />
  </>
);

export default App;
