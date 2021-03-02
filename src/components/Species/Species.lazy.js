import React, { lazy, Suspense } from 'react';

const LazySpecies = lazy(() => import('./Species'));

const Species = props => (
  <Suspense fallback={null}>
    <LazySpecies {...props} />
  </Suspense>
);

export default Species;
