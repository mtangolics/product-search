import React from 'react';
import ReactDOM from 'react-dom';
import ProductSearchApp from './ProductSearchApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductSearchApp />, div);
});
