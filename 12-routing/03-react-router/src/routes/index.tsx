import { useEffect } from 'react';
import type { FC } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AllPlayers from 'components/ecosystems/AllPlayers';
import PlayerListBySchool from 'components/ecosystems/PlayerListBySchool';
import CharactersFrame from 'components/templates/CharactersFrame';
import Home from 'components/templates/Home';

const IndexRoutes: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="characters" element={<CharactersFrame />}>
        <Route path="" element={<AllPlayers my={12} />} />
        <Route path=":schoolId" element={<PlayerListBySchool my={12} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default IndexRoutes;
