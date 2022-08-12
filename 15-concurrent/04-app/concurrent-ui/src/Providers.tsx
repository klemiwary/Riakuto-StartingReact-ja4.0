import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { SWRConfig } from 'swr';

const swrOptions = {
  suspense: true,
  revalidateOnFocus: false,
  dedupingInterval: 60000,
  shouldRetryOnError: false,
};

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <HelmetProvider>
    <ChakraProvider>
      <Router>
        <SWRConfig value={swrOptions}>{children}</SWRConfig>
      </Router>
    </ChakraProvider>
  </HelmetProvider>
);

export default Providers;
