import React, { lazy, Suspense } from 'react';

const LazyPlanets = lazy(() => import('./Planets'));

const Planets = props => (
  <Suspense fallback={null}>
    <LazyPlanets {...props} />
  </Suspense>
);

export default Planets;
