import React from 'react';
import ReactDOM from 'react-dom';
import Starships from './Starships';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starships />, div);
  ReactDOM.unmountComponentAtNode(div);
});