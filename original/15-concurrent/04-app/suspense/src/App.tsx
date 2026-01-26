import type { FC } from 'react';
import Providers from './Providers';
import IndexRoutes from './routes';

const App: FC = () => (
  <Providers>
    <IndexRoutes />
  </Providers>
);

export default App;
