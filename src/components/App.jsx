import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Home'));
const AutoCatalog = lazy(() => import('../pages/Catalog'));
const FavoriteAuto = lazy(() => import('../pages/Favorite'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<AutoCatalog />} />
          <Route path="/favorites" element={<FavoriteAuto />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

