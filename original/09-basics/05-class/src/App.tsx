import { Component } from 'react';
import { Heading } from '@chakra-ui/react';
import Timer from 'components/Timer';
import './App.css';

class App extends Component {
  render = (): JSX.Element => (
    <>
      <Heading size="lg" as="h1" my={8}>
        {import.meta.env.VITE_APP_TITLE}
      </Heading>
      <Timer />
    </>
  );
}

export default App;
