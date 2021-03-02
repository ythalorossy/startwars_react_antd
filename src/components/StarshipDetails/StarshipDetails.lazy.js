import React, { lazy, Suspense } from 'react';

const LazyStarshipDetails = lazy(() => import('./StarshipDetails'));

const StarshipDetails = props => (
  <Suspense fallback={null}>
    <LazyStarshipDetails {...props} />
  </Suspense>
);

export default StarshipDetails;
