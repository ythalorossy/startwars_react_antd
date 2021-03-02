import React from 'react';
import ReactDOM from 'react-dom';
import PeopleDetails from './PeopleDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PeopleDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});