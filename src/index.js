import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider as Auth } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Auth
    domain={process.env.Domain}
    clientId={process.env.Client_ID}
    redirectUri={process.env.REDIRECT_URL}>

    <App />
    </Auth>
  // </React.StrictMode>
);



