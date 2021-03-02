import React from 'react';
import ReactDOM from 'react-dom';
import Species from './Species';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Species />, div);
  ReactDOM.unmountComponentAtNode(div);
});