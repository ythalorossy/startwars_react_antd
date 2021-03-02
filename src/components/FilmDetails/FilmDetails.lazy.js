import React, { lazy, Suspense } from 'react';

const LazyFilmDetails = lazy(() => import('./FilmDetails'));

const FilmDetails = props => (
  <Suspense fallback={null}>
    <LazyFilmDetails {...props} />
  </Suspense>
);

export default FilmDetails;
