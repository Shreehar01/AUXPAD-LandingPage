import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {BrowserRouter} from 'react-router-dom';

const element = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(element, document.getElementById('root'));