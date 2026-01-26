import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <HelmetProvider>
    <ChakraProvider>
      <Router>{children}</Router>
    </ChakraProvider>
  </HelmetProvider>
);

export default Providers;
