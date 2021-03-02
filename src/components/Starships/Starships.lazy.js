import React, { lazy, Suspense } from 'react';

const LazyStarships = lazy(() => import('./Starships'));

const Starships = props => (
  <Suspense fallback={null}>
    <LazyStarships {...props} />
  </Suspense>
);

export default Starships;
