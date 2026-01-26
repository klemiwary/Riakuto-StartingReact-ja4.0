import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from 'components/templates/Home';

const appTitle = import.meta.env.VITE_APP_TITLE;

const IndexRoutes: FC = () => (
  <>
    <Helmet>
      <title>{appTitle}</title>
    </Helmet>
    <Home pageTitle={appTitle} />
  </>
);

export default IndexRoutes;
