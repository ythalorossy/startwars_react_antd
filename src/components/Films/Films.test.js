import React from 'react';
import ReactDOM from 'react-dom';
import Films from './Films';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Films />, div);
  ReactDOM.unmountComponentAtNode(div);
});