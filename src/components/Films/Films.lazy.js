import React, { lazy, Suspense } from 'react';

const LazyFilms = lazy(() => import('./Films'));

const Films = props => (
  <Suspense fallback={null}>
    <LazyFilms {...props} />
  </Suspense>
);

export default Films;
