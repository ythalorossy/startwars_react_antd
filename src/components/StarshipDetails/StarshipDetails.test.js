import React from 'react';
import ReactDOM from 'react-dom';
import StarshipDetails from './StarshipDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarshipDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});