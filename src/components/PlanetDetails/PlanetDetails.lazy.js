import React, { lazy, Suspense } from 'react';

const LazyPlanetDetails = lazy(() => import('./PlanetDetails'));

const PlanetDetails = props => (
  <Suspense fallback={null}>
    <LazyPlanetDetails {...props} />
  </Suspense>
);

export default PlanetDetails;
