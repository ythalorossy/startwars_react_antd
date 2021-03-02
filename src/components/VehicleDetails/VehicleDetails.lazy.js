import React, { lazy, Suspense } from 'react';

const LazyVehicleDetails = lazy(() => import('./VehicleDetails'));

const VehicleDetails = props => (
  <Suspense fallback={null}>
    <LazyVehicleDetails {...props} />
  </Suspense>
);

export default VehicleDetails;
