import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider as Auth } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Auth
    domain={process.env.REACT_APP_Domain}
    clientId={process.env.REACT_APP_Client_ID}
    redirectUri={process.env.REACT_APP_REDIRECT_URL}>

    <App />
    </Auth>
  // </React.StrictMode>
);



