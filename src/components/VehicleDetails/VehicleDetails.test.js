import React from 'react';
import ReactDOM from 'react-dom';
import VehicleDetails from './VehicleDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VehicleDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});