import React from 'react';
import ReactDOM from 'react-dom';
import SpecieDetails from './SpecieDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpecieDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});