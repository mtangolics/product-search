import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductSearchApp from './ProductSearchApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProductSearchApp />, document.getElementById('root'));
registerServiceWorker();
