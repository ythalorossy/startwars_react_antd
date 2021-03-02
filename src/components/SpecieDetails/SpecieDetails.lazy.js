import React, { lazy, Suspense } from 'react';

const LazySpecieDetails = lazy(() => import('./SpecieDetails'));

const SpecieDetails = props => (
  <Suspense fallback={null}>
    <LazySpecieDetails {...props} />
  </Suspense>
);

export default SpecieDetails;
