import React, { lazy, Suspense } from 'react';

const LazyVehicles = lazy(() => import('./Vehicles'));

const Vehicles = props => (
  <Suspense fallback={null}>
    <LazyVehicles {...props} />
  </Suspense>
);

export default Vehicles;
