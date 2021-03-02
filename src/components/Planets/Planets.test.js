import React from 'react';
import ReactDOM from 'react-dom';
import Planets from './Planets';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Planets />, div);
  ReactDOM.unmountComponentAtNode(div);
});