import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri='http://localhost:3000/shop'
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
