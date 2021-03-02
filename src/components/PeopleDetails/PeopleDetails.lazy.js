import React, { lazy, Suspense } from 'react';

const LazyPeopleDetails = lazy(() => import('./PeopleDetails'));

const PeopleDetails = props => (
  <Suspense fallback={null}>
    <LazyPeopleDetails {...props} />
  </Suspense>
);

export default PeopleDetails;
