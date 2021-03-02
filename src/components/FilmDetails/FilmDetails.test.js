import React from 'react';
import ReactDOM from 'react-dom';
import FilmDetails from './FilmDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilmDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});