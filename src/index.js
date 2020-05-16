import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie'

import './styles/main.scss';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
